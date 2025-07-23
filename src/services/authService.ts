import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

interface IEmailAndPass {
    email: string,
    password: string
}

export const signup = ({email,password} : IEmailAndPass) => {
    return createUserWithEmailAndPassword(auth,email,password);
}

export const login = ({email,password} : IEmailAndPass) => {
    return signInWithEmailAndPassword(auth,email,password);
}

export const logout = () => {
    return signOut(auth);
};