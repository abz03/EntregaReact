import React from 'react';
import { useCart } from '../contexts/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
    const { totalItems } = useCart();

    return (
        <div className="cart-widget">
            <FaShoppingCart color="white" size="1.5em" />
            <Badge bg="secondary">{totalItems}</Badge>
        </div>
    );
};

export default CartWidget;