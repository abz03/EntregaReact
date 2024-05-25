import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    // Incrementar la cantidad
    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    // Decrementar la cantidad
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <ButtonGroup>
            <Button variant="secondary" onClick={handleDecrement}>-</Button>
            <Button variant="light" disabled>{quantity}</Button>
            <Button variant="secondary" onClick={handleIncrement}>+</Button>
            <Button variant="primary" onClick={() => onAdd(quantity)}>Agregar al Carrito</Button>
        </ButtonGroup>
    );
};

export default ItemCount;