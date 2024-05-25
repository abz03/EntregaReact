import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar style={{ backgroundColor: 'orange' }} variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Comprar tu Pokemon, no los atrapes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/cart">Carrito</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;