import {doc, getDoc, setDoc, collection} from 'firebase/firestore';
import {db} from '../firebase/firebaseConfig';
import { User } from 'firebase/auth';

// User interface for Firestore
export interface IUserProfile {
    uid: string;
    email: string;
    fullName: string;
    createdAt: Date;
    updatedAt: Date;
    avatar?: string;
    role?: 'user' | 'admin';
    isActive?: boolean;
}

export const fetchUserProfile = async (uid: string) => {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    if(userSnap.exists()){
        return userSnap.data() as IUserProfile;
    }
    else{
        console.warn('No such user in firestore');
        return null;
    }
}

export const createUserProfile = async (user: User, additionalData: Partial<IUserProfile>) => {
    try {
        const userRef = doc(db, "users", user.uid);
        
        const userData: IUserProfile = {
            uid: user.uid,
            email: user.email || '',
            fullName: additionalData.fullName || '',
            createdAt: new Date(),
            updatedAt: new Date(),
            role: 'user',
            isActive: true,
            ...additionalData
        };

        await setDoc(userRef, userData);
        return userData;
    } catch (error) {
        console.error('Error creating user profile:', error);
        throw error;
    }
}

export const updateUserProfile = async (uid: string, updates: Partial<IUserProfile>) => {
    try {
        const userRef = doc(db, "users", uid);
        const updateData = {
            ...updates,
            updatedAt: new Date()
        };
        
        await setDoc(userRef, updateData, { merge: true });
        return updateData;
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw error;
    }
}