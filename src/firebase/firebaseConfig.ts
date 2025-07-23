import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcNjmClqmyQ-rcuFfNy7N-tSCJmiMcaMs",
  authDomain: "vista-panel-ccea5.firebaseapp.com",
  projectId: "vista-panel-ccea5",
  storageBucket: "vista-panel-ccea5.firebasestorage.app",
  messagingSenderId: "290452489155",
  appId: "1:290452489155:web:12b859c64ba056e27db376"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);