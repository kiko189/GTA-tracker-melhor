// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA91AoWZFOG1EbLz6p5OjfJd-Us-S9x4YQ",
  authDomain: "gta-tracker-67774.firebaseapp.com",
  projectId: "gta-tracker-67774",
  storageBucket: "gta-tracker-67774.firebasestorage.app",
  messagingSenderId: "2917447473",
  appId: "1:2917447473:web:552539a68b5f84865fa210",
  measurementId: "G-01KDYD43WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
