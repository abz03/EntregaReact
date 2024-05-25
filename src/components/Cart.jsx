import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart } = useCart();

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    //Se valida que cuando no contenga "valores" genere en la UI un mensaje de "El carrito está vacío"
    return (
        <Container>
            <h2>Carrito de Compras</h2>
            <Row>
                {cart.length > 0 ? (
                    cart.map(item => (
                        <Col key={item.id} md={4}>
                            <CartItem item={item} />
                        </Col>
                    ))
                ) : (
                    <p>El carrito está vacío</p>
                )}
            </Row>
            {cart.length > 0 && (
                <div className="cart-summary">
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                    <Button variant="danger" onClick={clearCart}>Vaciar Carrito</Button>
                    <Link to="/checkout">
                        <Button variant="success">Comprar</Button>
                    </Link>
                </div>
            )}
        </Container>
    );
};

export default Cart;