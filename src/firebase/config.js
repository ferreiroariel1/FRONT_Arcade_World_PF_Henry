// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVgcV6OFR9_TvwG9TLSLk4bGV1c5qhPfs",
  authDomain: "arcade-world-pf.firebaseapp.com",
  projectId: "arcade-world-pf",
  storageBucket: "arcade-world-pf.appspot.com",
  messagingSenderId: "48412907522",
  appId: "1:48412907522:web:2478713f06d3eac163ef1b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)