import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import MoreInfo from './components/MoreInfo';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div>
        <NavBar /> {/* Barra de navegación común a todas las páginas */}
        <Routes> {/* Contenedor para las rutas */}
          <Route path="/" element={<ItemListContainer />} index /> {/* Ruta principal, se muestra por defecto */}
          <Route path="/more-info" element={<MoreInfo />} /> {/* Ruta para la página de más información */}
          <Route path="/cart" element={<Cart />} /> {/* Ruta para el carrito de compras */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;