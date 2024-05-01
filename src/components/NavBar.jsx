import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Compra Pokemon</Link> {/* Enlace a la página principal */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/more-info">Más Información</Link> {/* Enlace a la página de más información */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Carrito</Link> {/* Enlace al carrito de compras */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;