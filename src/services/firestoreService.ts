import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  DocumentData,
  QuerySnapshot,
  DocumentSnapshot,
  writeBatch,
  runTransaction,
  CollectionReference,
  Query,
  WhereFilterOp,
  OrderByDirection
} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { getCurrentUserToken } from './authService';

// Generic CRUD operations with automatic token handling
export class FirestoreService {
  // Get a single document
  static async getDocument<T = DocumentData>(
    collectionName: string,
    documentId: string
  ): Promise<T | null> {
    try {
      // Ensure we have a valid token before making Firestore calls
      await getCurrentUserToken();
      
      const docRef = doc(db, collectionName, documentId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as T;
      }
      return null;
    } catch (error) {
      console.error(`Error getting document from ${collectionName}:`, error);
      throw error;
    }
  }

  // Get all documents from a collection
  static async getDocuments<T = DocumentData>(
    collectionName: string,
    constraints?: {
      where?: Array<{ field: string; operator: WhereFilterOp; value: any }>;
      orderBy?: Array<{ field: string; direction?: OrderByDirection }>;
      limit?: number;
    }
  ): Promise<T[]> {
    try {
      await getCurrentUserToken();
      
      let q: CollectionReference<DocumentData> | Query<DocumentData> = collection(db, collectionName);
      
      if (constraints?.where) {
        constraints.where.forEach(({ field, operator, value }) => {
          q = query(q, where(field, operator, value));
        });
      }
      
      if (constraints?.orderBy) {
        constraints.orderBy.forEach(({ field, direction = 'asc' }) => {
          q = query(q, orderBy(field, direction));
        });
      }
      
      if (constraints?.limit) {
        q = query(q, limit(constraints.limit));
      }
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as T[];
    } catch (error) {
      console.error(`Error getting documents from ${collectionName}:`, error);
      throw error;
    }
  }

  // Add a new document
  static async addDocument<T = DocumentData>(
    collectionName: string,
    data: Omit<T, 'id'>
  ): Promise<string> {
    try {
      await getCurrentUserToken();
      
      const docRef = await addDoc(collection(db, collectionName), data);
      return docRef.id;
    } catch (error) {
      console.error(`Error adding document to ${collectionName}:`, error);
      throw error;
    }
  }

  // Update a document
  static async updateDocument<T = DocumentData>(
    collectionName: string,
    documentId: string,
    data: Partial<T>
  ): Promise<void> {
    try {
      await getCurrentUserToken();
      
      const docRef = doc(db, collectionName, documentId);
      await updateDoc(docRef, data);
    } catch (error) {
      console.error(`Error updating document in ${collectionName}:`, error);
      throw error;
    }
  }

  // Delete a document
  static async deleteDocument(
    collectionName: string,
    documentId: string
  ): Promise<void> {
    try {
      await getCurrentUserToken();
      
      const docRef = doc(db, collectionName, documentId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error(`Error deleting document from ${collectionName}:`, error);
      throw error;
    }
  }

  // Real-time listener for a single document
  static subscribeToDocument<T = DocumentData>(
    collectionName: string,
    documentId: string,
    callback: (data: T | null) => void
  ): () => void {
    const docRef = doc(db, collectionName, documentId);
    
    return onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        callback({ id: doc.id, ...doc.data() } as T);
      } else {
        callback(null);
      }
    });
  }

  // Real-time listener for a collection
  static subscribeToCollection<T = DocumentData>(
    collectionName: string,
    callback: (data: T[]) => void,
    constraints?: {
      where?: Array<{ field: string; operator: WhereFilterOp; value: any }>;
      orderBy?: Array<{ field: string; direction?: OrderByDirection }>;
      limit?: number;
    }
  ): () => void {
    let q: CollectionReference<DocumentData> | Query<DocumentData> = collection(db, collectionName);
    
    if (constraints?.where) {
      constraints.where.forEach(({ field, operator, value }) => {
        q = query(q, where(field, operator, value));
      });
    }
    
    if (constraints?.orderBy) {
      constraints.orderBy.forEach(({ field, direction = 'asc' }) => {
        q = query(q, orderBy(field, direction));
      });
    }
    
    if (constraints?.limit) {
      q = query(q, limit(constraints.limit));
    }
    
    return onSnapshot(q, (querySnapshot: QuerySnapshot<DocumentData>) => {
      const data = querySnapshot.docs.map((doc: DocumentSnapshot<DocumentData>) => ({
        id: doc.id,
        ...doc.data()
      })) as T[];
      callback(data);
    });
  }

  // Batch operations
  static async batchWrite(operations: Array<{
    type: 'add' | 'update' | 'delete';
    collection: string;
    id?: string;
    data?: any;
  }>): Promise<void> {
    try {
      await getCurrentUserToken();
      
      const batch = writeBatch(db);
      
      operations.forEach(({ type, collection: collectionName, id, data }) => {
        if (type === 'add') {
          const docRef = doc(collection(db, collectionName));
          batch.set(docRef, data);
        } else if (type === 'update' && id) {
          const docRef = doc(db, collectionName, id);
          batch.update(docRef, data);
        } else if (type === 'delete' && id) {
          const docRef = doc(db, collectionName, id);
          batch.delete(docRef);
        }
      });
      
      await batch.commit();
    } catch (error) {
      console.error('Error in batch write:', error);
      throw error;
    }
  }

  // Transaction operations
  static async runTransaction<T>(
    updateFunction: (transaction: any) => Promise<T>
  ): Promise<T> {
    try {
      await getCurrentUserToken();
      return await runTransaction(db, updateFunction);
    } catch (error) {
      console.error('Error in transaction:', error);
      throw error;
    }
  }
}

// Specific service methods for your app
export const userService = {
  // Get user profile
  async getUserProfile(uid: string) {
    return FirestoreService.getDocument('users', uid);
  },

  // Update user profile
  async updateUserProfile(uid: string, data: any) {
    return FirestoreService.updateDocument('users', uid, data);
  },

  // Subscribe to user profile changes
  subscribeToUserProfile(uid: string, callback: (data: any) => void) {
    return FirestoreService.subscribeToDocument('users', uid, callback);
  }
};

export const projectService = {
  // Get user's projects
  async getUserProjects(userId: string) {
    return FirestoreService.getDocuments('projects', {
      where: [{ field: 'userId', operator: '==', value: userId }],
      orderBy: [{ field: 'createdAt', direction: 'desc' }]
    });
  },

  // Subscribe to user's projects
  subscribeToUserProjects(userId: string, callback: (data: any[]) => void) {
    return FirestoreService.subscribeToCollection('projects', callback, {
      where: [{ field: 'userId', operator: '==', value: userId }],
      orderBy: [{ field: 'createdAt', direction: 'desc' }]
    });
  },

  // Add new project
  async addProject(projectData: any) {
    return FirestoreService.addDocument('projects', {
      ...projectData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
};

export const orderService = {
  // Get user's orders
  async getUserOrders(userId: string) {
    return FirestoreService.getDocuments('orders', {
      where: [{ field: 'userId', operator: '==', value: userId }],
      orderBy: [{ field: 'createdAt', direction: 'desc' }]
    });
  },

  // Subscribe to user's orders
  subscribeToUserOrders(userId: string, callback: (data: any[]) => void) {
    return FirestoreService.subscribeToCollection('orders', callback, {
      where: [{ field: 'userId', operator: '==', value: userId }],
      orderBy: [{ field: 'createdAt', direction: 'desc' }]
    });
  }
}; 