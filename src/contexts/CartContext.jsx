import React, { createContext, useState, useContext } from 'react';
import { addOrder } from '../firebase/firebase';

// Crear el contexto del carrito de compras
const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(CartContext);

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    // Estado para almacenar los items del carrito
    const [cart, setCart] = useState([]);

    // Función para agregar un item al carrito
    const addItem = (item) => {
        setCart((prevCart) => {
            // Buscar si el item ya está en el carrito
            const itemIndex = prevCart.findIndex(i => i.id === item.id);
            if (itemIndex > -1) {
                // Si el item ya está en el carrito, actualizar la cantidad
                const newCart = [...prevCart];
                newCart[itemIndex].quantity += item.quantity;
                return newCart;
            } else {
                // Si el item no está en el carrito, agregarlo
                return [...prevCart, item];
            }
        });
    };

    // Función para eliminar un item del carrito
    const removeItem = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    };

    // Función para vaciar el carrito
    const clearCart = () => setCart([]);

    // Función para calcular el total de items en el carrito
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    // Función para crear una orden
    const createOrder = async (buyerData) => {
        // Crear un objeto de orden con la información del comprador y los items del carrito
        const order = {
            buyer: buyerData,
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            date: new Date().toISOString()
        };
        // Agregar la orden a la base de datos de Firebase
        const orderId = await addOrder(order);
        // Vaciar el carrito después de crear la orden
        clearCart();
        return orderId;
    };

    // Proveer el contexto del carrito a los componentes hijos
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, createOrder }}>
            {children}
        </CartContext.Provider>
    );
};