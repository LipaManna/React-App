import {doc, getDoc} from 'firebase/firestore';
import {db} from '../firebase/firebaseConfig';

export const fetchUserProfile = async (uid: string) => {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    if(userSnap.exists()){
        return userSnap.data();
    }
    else{
        console.warn('No such user in firestore');
        return null;
    }
}