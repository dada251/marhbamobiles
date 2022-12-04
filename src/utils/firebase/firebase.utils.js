import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    setDoc,
    collection,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9Bn4maM4ygWSm8JxdFyYctCxL1WZEV2E",
    authDomain: "mobile-shop-7dd8a.firebaseapp.com",
    projectId: "mobile-shop-7dd8a",
    storageBucket: "mobile-shop-7dd8a.appspot.com",
    messagingSenderId: "847066980174",
    appId: "1:847066980174:web:ca780b58f2caf85b41481f"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const getDocuments = async () => {
    const querySnapshot = await getDocs(collection(db, 'categories'));
    const object = [];
    querySnapshot.forEach((doc) => {
        object.push({id: doc.id, name: doc.data().name, price: doc.data().price ,imageUrl: doc.data().imageUrl});
    });
    return object;
}

export const addDocuments = async (documentData) => {
    if (!documentData) return;

    const userDocRef = doc(db, 'categories', `${documentData.name}${documentData.price}`);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { imageUrl, name, price } = documentData;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                imageUrl,
                name,
                price,
                createdAt,
            });
            return 'done';
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) => {
    onAuthStateChanged(auth, callback);
}