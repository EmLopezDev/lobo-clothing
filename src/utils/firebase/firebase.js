import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCTzlOlMqusETIScBwQRFK4H1ctU-Vu95c",
    authDomain: "lobo-clothing-db.firebaseapp.com",
    projectId: "lobo-clothing-db",
    storageBucket: "lobo-clothing-db.firebasestorage.app",
    messagingSenderId: "283065655862",
    appId: "1:283065655862:web:5ad6b98e6ae4b5ec1d2e97",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log("Error creating the user", error.message);
        }
    }

    return userDocRef;
};
