// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCjZtb1n7hqrwIaKBFPnixa7m_AyxH8Ek",
  authDomain: "sprint4-9484a.firebaseapp.com",
  projectId: "sprint4-9484a",
  storageBucket: "sprint4-9484a.appspot.com",
  messagingSenderId: "280790492804",
  appId: "1:280790492804:web:564cd694fb390936b9c4d1",
  measurementId: "G-DCVMM382EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
