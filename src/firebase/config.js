// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY0iGOCQPH3NmaX19K-b3fkVLg1bntlHw",
  authDomain: "journal-app-4cc9b.firebaseapp.com",
  projectId: "journal-app-4cc9b",
  storageBucket: "journal-app-4cc9b.appspot.com",
  messagingSenderId: "270857632104",
  appId: "1:270857632104:web:222312f1d43e71cf47fedd"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );
