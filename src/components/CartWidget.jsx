import React from 'react';
import carrito from '../assets/carrito.png' 

const CartWidget = () => {
  return (
    <div className="cart-widget">
      {/* <img src={carrito} className="carrito" alt="logo carrito de compras" /> */}
      <span>Carro de compras</span>
      {/* <span className="cart-count">0</span> */}
    </div>
  );
};

export default CartWidget;