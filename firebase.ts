// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVyo5T_a1KfT6-Aw8fMPeDpP4D65rZ51U",
  authDomain: "easy-chatgpt-cc8d8.firebaseapp.com",
  projectId: "easy-chatgpt-cc8d8",
  storageBucket: "easy-chatgpt-cc8d8.appspot.com",
  messagingSenderId: "181167203121",
  appId: "1:181167203121:web:2d877cb40bed105d300610",
  measurementId: "G-BC5STYNSJB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
