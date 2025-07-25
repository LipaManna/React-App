import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  getIdToken,
  getIdTokenResult,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

interface IEmailAndPass {
    email: string,
    password: string
}

// Get current user's ID token (includes refresh token handling)
export const getCurrentUserToken = async (forceRefresh = false): Promise<string | null> => {
  const user = auth.currentUser;
  if (!user) return null;
  
  try {
    const token = await getIdToken(user, forceRefresh);
    return token;
  } catch (error) {
    console.error('Error getting ID token:', error);
    return null;
  }
};

// Get token result with expiration info
export const getTokenResult = async (): Promise<any> => {
  const user = auth.currentUser;
  if (!user) return null;
  
  try {
    const tokenResult = await getIdTokenResult(user);
    return tokenResult;
  } catch (error) {
    console.error('Error getting token result:', error);
    return null;
  }
};

// Set persistence (local storage vs session storage)
export const setAuthPersistence = async (persist = true) => {
  try {
    const persistence = persist ? browserLocalPersistence : browserSessionPersistence;
    await setPersistence(auth, persistence);
  } catch (error) {
    console.error('Error setting persistence:', error);
  }
};

export const signup = ({email, password}: IEmailAndPass) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Enhanced signup function that creates both auth user and profile
export const signupWithProfile = async ({email, password, fullName}: IEmailAndPass & {fullName: string}) => {
    try {
        // Create user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Import the createUserProfile function
        const { createUserProfile } = await import('./userService');
        
        // Create user profile in Firestore
        const userProfile = await createUserProfile(user, { fullName });
        
        return {
            user,
            userProfile
        };
    } catch (error) {
        console.error('Error in signup with profile:', error);
        throw error;
    }
};

export const login = ({email, password}: IEmailAndPass) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
    return signOut(auth);
};