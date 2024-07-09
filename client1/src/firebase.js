// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a2a59.firebaseapp.com",
  projectId: "mern-estate-a2a59",
  storageBucket: "mern-estate-a2a59.appspot.com",
  messagingSenderId: "319775829751",
  appId: "1:319775829751:web:7dfbe5258f57c9c8a8adf2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);