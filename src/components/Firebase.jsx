// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT4EHwQmN7S2C4rJ842k_ltr6bjJDNAxA",
  authDomain: "instant-chat-fbe32.firebaseapp.com",
  projectId: "instant-chat-fbe32",
  storageBucket: "instant-chat-fbe32.appspot.com",
  messagingSenderId: "1054008846096",
  appId: "1:1054008846096:web:41013998bce455ae166795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)

export const googleProvider = new GoogleAuthProvider()
