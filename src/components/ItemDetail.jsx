import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../contexts/CartContext';
import { Card, Button } from 'react-bootstrap';

const ItemDetail = ({ item }) => {
    const { addItem } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = (quantity) => {
        addItem({ ...item, quantity });
        setAdded(true);
    };

    return (
        <Card className="item-detail">
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Precio: ${item.price}</Card.Text>
                {!added && <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />}
                {added && <Button variant="success" disabled>Producto agregado al carrito</Button>}
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;