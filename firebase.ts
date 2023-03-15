// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7ywpXrBRC7YVm40FcBPBgYqEx8ZAnbpo",
  authDomain: "esay-chatgpt.firebaseapp.com",
  projectId: "esay-chatgpt",
  storageBucket: "esay-chatgpt.appspot.com",
  messagingSenderId: "726929658048",
  appId: "1:726929658048:web:a4a49d79fce2c0a1af1d25",
  measurementId: "G-D12JZ2SG0H"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
