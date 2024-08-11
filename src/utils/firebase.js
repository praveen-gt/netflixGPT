// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOlgcxekTP5zqeGt_N9cTyLZo1r3nnCr4",
  authDomain: "netflix-gpt-bc731.firebaseapp.com",
  projectId: "netflix-gpt-bc731",
  storageBucket: "netflix-gpt-bc731.appspot.com",
  messagingSenderId: "79787686916",
  appId: "1:79787686916:web:a82cd17768168182d40951",
  measurementId: "G-ZSXYBHPRJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()