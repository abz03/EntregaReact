import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Card, Button } from 'react-bootstrap';

const CartItem = ({ item }) => {
    const { removeItem } = useCart();

    //se muestra cada "Card" del carrito de compra, su cantidad seleccionada, su precio y da la opcion de eliminarlo
    // use "number" en firestore para evitar errores por tipo de valor en el precio, no se si daba error si lo dejaba como "string", pero mejor evitar
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    Cantidad: {item.quantity}
                    <br />
                    Precio: ${item.price}
                </Card.Text>
                <Button variant="danger" onClick={() => removeItem(item.id)}>Eliminar</Button>
            </Card.Body>
        </Card>
    );
};

export default CartItem;