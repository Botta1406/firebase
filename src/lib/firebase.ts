import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFm0QmnXlE0qbtQls-iUbrKB9UOIqbCgo",
    authDomain: "fir-auth-28d95.firebaseapp.com",
    projectId: "fir-auth-28d95",
    storageBucket: "fir-auth-28d95.appspot.com",
    messagingSenderId: "621914757021",
    appId: "1:621914757021:web:f2495acfa429755daf4174",
    measurementId: "G-2M9LPNZTQK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Configure Google Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account' // This forces account selection every time
});

export { auth, googleProvider, signInWithPopup };