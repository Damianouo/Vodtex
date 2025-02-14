// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0Tzr-qW0rbVAet14fFoYgTmvCPOXpagc",
  authDomain: "vodtex-e8a94.firebaseapp.com",
  projectId: "vodtex-e8a94",
  storageBucket: "vodtex-e8a94.firebasestorage.app",
  messagingSenderId: "565362828263",
  appId: "1:565362828263:web:707b24669ca291d1d6d342",
  measurementId: "G-KJC6LGTQKW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
