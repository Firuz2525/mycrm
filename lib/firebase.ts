import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDAdoKdZTeFsV18WNKcQAzGIHrrtKnGW0",
  authDomain: "shisha-9127b.firebaseapp.com",
  projectId: "shisha-9127b",
  storageBucket: "shisha-9127b.firebasestorage.app",
  messagingSenderId: "995183708687",
  appId: "1:995183708687:web:efb4f48b7355ace144f17a",
  measurementId: "G-2ZC1DZQK0F",
};

// const app =
//   getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// const db = getFirestore(app);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
