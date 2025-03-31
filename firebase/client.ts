import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWoCbCathcKh3-rK_IxPl-HbHrIq6yWSk",
  authDomain: "trainer-67184.firebaseapp.com",
  projectId: "trainer-67184",
  storageBucket: "trainer-67184.firebasestorage.app",
  messagingSenderId: "721022811265",
  appId: "1:721022811265:web:23456536321a2ac70c2180",
  measurementId: "G-EQH39CZ7BM",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
