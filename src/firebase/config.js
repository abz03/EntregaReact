// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB9A0p2qyQuY-9P_wFDp9qBPVtrSE9tOo",
  authDomain: "coderhouse-ecommerce-f9e97.firebaseapp.com",
  projectId: "coderhouse-ecommerce-f9e97",
  storageBucket: "coderhouse-ecommerce-f9e97.appspot.com",
  messagingSenderId: "774773270723",
  appId: "1:774773270723:web:1f0a45e9e0fb8cd9de1a76",
  measurementId: "G-YW0P4ZWCYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);