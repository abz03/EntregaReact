import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Item = ({ item, onAddToCart }) => {
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem({ ...item, quantity: 1 });
        onAddToCart(item.name);
    };

    return (
        <Card>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Precio: ${item.price}</Card.Text>
                <div className="d-flex justify-content-between">
                    <Link to={`/item/${item.id}`}>
                        <Button variant="primary">Más detalles</Button>
                    </Link>
                    <Button variant="success" onClick={handleAddToCart}>Agregar al Carrito</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Item;