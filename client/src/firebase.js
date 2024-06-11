// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-bcc87.firebaseapp.com",
  projectId: "mern-estate-bcc87",
  storageBucket: "mern-estate-bcc87.appspot.com",
  messagingSenderId: "920447464923",
  appId: "1:920447464923:web:9a9563e774613ce6f763fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
