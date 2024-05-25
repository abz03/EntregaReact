import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Cart = () => {
    const { cart, clearCart, createOrder } = useCart();
    const [orderId, setOrderId] = useState(null);

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCreateOrder = async () => {
        const buyerData = { name: 'John Doe', email: 'john.doe@example.com', phone: '123456789' };
        const orderId = await createOrder(buyerData);
        setOrderId(orderId);
    };

    return (
        <Container>
            <h2>Carrito de Compras</h2>
            <Row>
                {cart.map(item => (
                    <Col key={item.id} md={4}>
                        <CartItem item={item} />
                    </Col>
                ))}
            </Row>
            <div className="cart-summary">
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
                <Button variant="danger" onClick={clearCart}>Vaciar Carrito</Button>
                <Button variant="success" onClick={handleCreateOrder}>Crear Orden</Button>
            </div>
            {orderId && <p>Orden creada con ID: {orderId}</p>}
        </Container>
    );
};

export default Cart;