import { collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

// Obtener productos de Firebase
export const getProducts = async () => {
    const productsCol = collection(db, 'products');
    const productSnapshot = await getDocs(productsCol);
    const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return productList;
};

// Obtener un producto por ID de Firebase
export const getProductById = async (id) => {
    const productDoc = doc(db, 'products', id);
    const productSnapshot = await getDoc(productDoc);
    if (productSnapshot.exists()) {
        return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
        throw new Error('Producto no encontrado');
    }
};

// Agregar una orden a Firebase
export const addOrder = async (order) => {
    const ordersCol = collection(db, 'orders');
    const orderDoc = await addDoc(ordersCol, order);
    return orderDoc.id;
};