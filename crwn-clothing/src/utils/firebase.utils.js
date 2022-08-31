import { initializeApp } from "firebase/app";
// import { getAnalytics, logEvent } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6EfY1EgJD45ZHOT8aGipRcmkya_I3FDM",
  authDomain: "crwn-clothing-db-737c5.firebaseapp.com",
  projectId: "crwn-clothing-db-737c5",
  storageBucket: "crwn-clothing-db-737c5.appspot.com",
  messagingSenderId: "680287199237",
  appId: "1:680287199237:web:45e240fa663c7d6e0c3c6c",
  measurementId: "G-0MH8Z2MXSP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// logEvent(analytics, 'notification_received', {
//     notification_id: '123',
//     notification_type: 'email'
// });

// Set Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(app);
export const signInWithGoogleRedirect = async () =>
  await signInWithRedirect(auth, googleProvider);
export const createAuthUserWithEmailAndPassword = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);
export const signInAuthWithEmailAndPassword = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);
export const signOutAuth = async () => await signOut(auth);
export const onAppAuthStateChanged = async (callback) =>
  await onAuthStateChanged(auth, callback);

// Database
export const db = getFirestore();
export const createUserFromAuth = async ({ uid, displayName, email }) => {
  const userDocRef = doc(db, "users", uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error", error);
    }
    return userDocRef;
  }
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const getCategoriesAndDocuments = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => doc.data());
};
