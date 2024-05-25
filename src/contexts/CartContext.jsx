import React, { createContext, useState, useContext } from 'react';
import { addOrder } from '../firebase/firebase';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

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

    const removeItem = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    };

    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const createOrder = async (buyerData) => {
        const order = {
            buyer: buyerData,
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            date: new Date().toISOString()
        };
        const orderId = await addOrder(order);
        clearCart();
        return orderId;
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, createOrder }}>
            {children}
        </CartContext.Provider>
    );
};