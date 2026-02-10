// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXQyMdkFjITqLOQocSXPeqMEV_9GZOLxs",
  authDomain: "my-portfolio-ratings.firebaseapp.com",
  projectId: "my-portfolio-ratings",
  storageBucket: "my-portfolio-ratings.firebasestorage.app",
  messagingSenderId: "355570914721",
  appId: "1:355570914721:web:29bfdaf69d95c06eea27e0",
  measurementId: "G-E3LC1VQPEQ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
const analytics = getAnalytics(app);