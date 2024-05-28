import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { addOrder } from '../firebase/firebase';

const CheckoutForm = () => {
    const { cart, clearCart } = useCart();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [orderId, setOrderId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Crear un objeto de orden con los datos del comprador y los items del carrito para poder ser enviado posteriormente a firebase
        const order = {
            buyer: { name, email, address },
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            date: new Date().toISOString()
        };

        // Agregar la orden a la base de datos de Firebase usando el objeto anteriormente creado
        const orderId = await addOrder(order);
        setOrderId(orderId);
        setShowConfirmation(true);
        clearCart();
    };

    // he buscado como agregar validaciones para evitar que se pueda ingresar un valor cualquiera, como por ejemplo con el correo
    return (
        <Container>
            <h2>Formulario de Compra</h2>
            {showConfirmation ? (
                <Alert variant="success">
                    ¡Compra realizada con éxito! En algunos días le llegarán unas masterball. ID de la orden: {orderId}
                </Alert>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingrese su nombre" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Ingrese su email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingrese su dirección" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                            required 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Confirmar Compra
                    </Button>
                </Form>
            )}
        </Container>
    );
};

export default CheckoutForm;