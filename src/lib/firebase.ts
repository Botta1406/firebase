// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCFm0QmnXlE0qbtQls-iUbrKB9UOIqbCgo",
    authDomain: "fir-auth-28d95.firebaseapp.com",
    projectId: "fir-auth-28d95",
    storageBucket: "fir-auth-28d95.appspot.com",
    messagingSenderId: "621914757021",
    appId: "1:621914757021:web:f2495acfa429755daf4174",
    measurementId: "G-2M9LPNZTQK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };
