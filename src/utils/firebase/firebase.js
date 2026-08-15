import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCTzlOlMqusETIScBwQRFK4H1ctU-Vu95c",
    authDomain: "lobo-clothing-db.firebaseapp.com",
    projectId: "lobo-clothing-db",
    storageBucket: "lobo-clothing-db.firebasestorage.app",
    messagingSenderId: "283065655862",
    appId: "1:283065655862:web:5ad6b98e6ae4b5ec1d2e97",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
