// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyBe5O-yn413UXnL6j7FeKy-MATkYNmVvPE",

  authDomain: "python-learn-8c442.firebaseapp.com",

  projectId: "python-learn-8c442",

  storageBucket: "python-learn-8c442.firebasestorage.app",

  messagingSenderId: "1002602742408",

  appId: "1:1002602742408:web:f7feb01c52590d00fb953d",

  measurementId: "G-VVBBHRMEZ7"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const storage = getStorage(app);

export const auth  = getAuth(app);

export { db, storage };