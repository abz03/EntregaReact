import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Card, Button } from 'react-bootstrap';

const CartItem = ({ item }) => {
    const { removeItem } = useCart();

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    Cantidad: {item.quantity}
                    <br />
                    Precio: ${item.price}
                    <br />
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </Card.Text>
                <Button variant="danger" onClick={() => removeItem(item.id)}>Eliminar</Button>
            </Card.Body>
        </Card>
    );
};

export default CartItem;