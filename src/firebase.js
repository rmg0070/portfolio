
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyARan9HZ5PTEU-s0W-Svx6bRbvaEjiuwPI",
  authDomain: "myportfolio-2a76d.firebaseapp.com",
  projectId: "myportfolio-2a76d",
  storageBucket: "myportfolio-2a76d.appspot.com",
  messagingSenderId: "927503166672",
  appId: "1:927503166672:web:c44bf7f83d5d6f0308c2d5",
  measurementId: "G-R6JTJ9TTMR"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);