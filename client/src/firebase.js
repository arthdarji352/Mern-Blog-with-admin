// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "earth-blog-1a060.firebaseapp.com",
  projectId: "earth-blog-1a060",
  storageBucket: "earth-blog-1a060.appspot.com",
  messagingSenderId: "882654609639",
  appId: "1:882654609639:web:c716cefe50f5946f3ba242",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
