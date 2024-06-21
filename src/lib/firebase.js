import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-9594a.firebaseapp.com",
  projectId: "reactchatapp-9594a",
  storageBucket: "reactchatapp-9594a.appspot.com",
  messagingSenderId: "618728528248",
  appId: "1:618728528248:web:bcaf904bb84c1a2beb508d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()