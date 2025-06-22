// src/firebase.js

import { toast } from 'react-toastify';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDMLflffvuVhp-rKLDBSEn55rZgELJ2xHg",
  authDomain: "netflix-clone-de4b0.firebaseapp.com",
  projectId: "netflix-clone-de4b0",
  storageBucket: "netflix-clone-de4b0.appspot.com",
  messagingSenderId: "785025179444",
  appId: "1:785025179444:web:4877f0f6649e7858260f61",
  measurementId: "G-8LWR69SX2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function with toast
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    toast.success("✅ Signed up successfully!");
  } catch (error) {
    toast.error(`❌ Signup Failed: ${error.message}`);
    console.error("Signup Error:", error.message);
  }
};

// Login function with toast
const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    toast.success("✅ Login successful!");
  } catch (error) {
    toast.error(`❌ Login Failed: ${error.message}`);
    console.error("Login Error:", error.message);
  }
};

// Logout function with toast
const logout = async () => {
  try {
    await signOut(auth);
    toast.info("🚪 Logged out");
  } catch (error) {
    toast.error(`❌ Logout Failed: ${error.message}`);
    console.error("Logout Error:", error.message);
  }
};

export { app, auth, db, signup, login, logout };
