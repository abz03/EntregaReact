import React from 'react';
import { useCart } from '../contexts/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
    const { totalItems } = useCart();

    //muestra el total de los items al ir siendo seleccionados, como cada elemento evitado usar CSS, con boostrap react
    return (
        <div className="cart-widget">
            <FaShoppingCart color="white" size="1.5em" />
            <Badge bg="secondary">{totalItems}</Badge>
        </div>
    );
};

export default CartWidget;