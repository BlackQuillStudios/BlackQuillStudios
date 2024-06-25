// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_bTC7o_liS--3yWPDwrGbZCv8-IcHAPE",
  authDomain: "echo-13dd5.firebaseapp.com",
  projectId: "echo-13dd5",
  storageBucket: "echo-13dd5.appspot.com",
  messagingSenderId: "360039497916",
  appId: "1:360039497916:web:63af52539163dbdfa450b9",
  measurementId: "G-LK6L8H9MMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

console.log('Firebase initialized');
