import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

  const firebaseConfig = {
 
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };