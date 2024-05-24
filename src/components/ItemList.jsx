import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const ItemList = ({ items }) => {
    const { addItem } = useCart();

    // Función para agregar un producto al carrito
    const handleAddToCart = (item) => {
        addItem({ ...item, quantity: 1 });
    };

    return (
        <Row>
            {items.map(item => (
                <Col key={item.id} md={4} className="mb-3">
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
                                <Button variant="success" onClick={() => handleAddToCart(item)}>Agregar al Carrito</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ItemList;