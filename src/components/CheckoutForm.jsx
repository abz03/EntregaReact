import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const CheckoutForm = () => {
    const { cart, clearCart } = useCart();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // maneja la lógica de la compra
        setShowConfirmation(true);
        clearCart();
    };
  
    // he buscado como agregar validaciones para evitar que se pueda ingresar un valor cualquiera, como por ejemplo con el correo
    return (
        <Container>
            <h2>Formulario de Compra</h2>
            {showConfirmation ? (
                <Alert variant="success">
                    ¡Compra realizada con éxito! En algunos días le llegarán unas masterball.
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