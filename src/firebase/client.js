import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  // Aca va el objeto que nos da Firebase:
  apiKey: "AIzaSyD2HRTHfe5-YAYx4EErt1iRTElwG9_LWvw",
  authDomain: "e-commercech-8b5e4.firebaseapp.com",
  projectId: "e-commercech-8b5e4",
  storageBucket: "e-commercech-8b5e4.appspot.com",
  messagingSenderId: "251219940096",
  appId: "1:251219940096:web:6c07899b8d51a2cd2a59e5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);