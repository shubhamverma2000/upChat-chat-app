import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0rCZyIU26vmGC1HZDeKSlH1F5RtwUw4g",
  authDomain: "upchat-17914.firebaseapp.com",
  projectId: "upchat-17914",
  storageBucket: "upchat-17914.appspot.com",
  messagingSenderId: "357689365177",
  appId: "1:357689365177:web:8d7b42275e664f76eb8168"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
