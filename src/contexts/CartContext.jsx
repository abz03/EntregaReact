import React, { createContext, useState, useContext } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(CartContext);

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar un ítem al carrito
    const addItem = (item) => {
        setCart((prevCart) => {
            const itemIndex = prevCart.findIndex(i => i.id === item.id);
            if (itemIndex > -1) {
                const newCart = [...prevCart];
                newCart[itemIndex].quantity += item.quantity;
                return newCart;
            } else {
                return [...prevCart, item];
            }
        });
    };

    // Función para remover un ítem del carrito
    const removeItem = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    };

    // Función para vaciar el carrito
    const clearCart = () => setCart([]);

    // Calcular el total de ítems en el carrito
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};