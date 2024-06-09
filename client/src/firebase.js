// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-253df.firebaseapp.com",
  projectId: "mern-estate-253df",
  storageBucket: "mern-estate-253df.appspot.com",
  messagingSenderId: "945413800921",
  appId: "1:945413800921:web:661e91b17a0cf814d58fc8",
  measurementId: "G-WHZWHL40YF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
