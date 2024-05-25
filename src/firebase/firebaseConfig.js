import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase utilizando variables de entorno
const firebaseConfig = {
  apiKey: "AIzaSyCB9A0p2qyQuY-9P_wFDp9qBPVtrSE9tOo",
  authDomain: "coderhouse-ecommerce-f9e97.firebaseapp.com",
  projectId: "coderhouse-ecommerce-f9e97",
  storageBucket: "coderhouse-ecommerce-f9e97.appspot.com",
  messagingSenderId: "774773270723",
  appId: "1:774773270723:web:1f0a45e9e0fb8cd9de1a76",
  measurementId: "G-YW0P4ZWCYM"

/*
  Se intento pero no se pudo, no me reconocia las variables, genere el archivo .env pero bueno, queda como funcione mejor
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID */
};

console.log(firebaseConfig); // Agrega este log para verificar las variables

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };