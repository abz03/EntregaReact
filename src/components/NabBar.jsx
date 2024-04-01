import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png' 

const NavBar = () => {
  return (
    <nav>
      <img src={logo} className="logo" alt="logo" />
      <div className="logo">Cuadros Remiau</div>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Comprar Cuadros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;