import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import ItemDetailContainer from './ItemDetailContainer'; // importar el componente de detalles

// componente que muestra la lista de pokémon y maneja la visualización de detalles y la compra
function ItemList({ pokemonList, onSelectPokemon, selectedPokemon }) {
  const [showModal, setShowModal] = useState(false); // estado para controlar la visibilidad del modal
  const [currentPokemon, setCurrentPokemon] = useState(null); // estado para el pokémon actual en detalles
  const [showAlert, setShowAlert] = useState(false); // estado para controlar la visibilidad del pop-up de compra

  // función para manejar el clic en "más detalles"
  const handleShowDetails = (pokemon) => {
    setCurrentPokemon(pokemon);
    setShowModal(true);
  };

  // función para manejar el clic en "comprar"
  const handleBuy = (pokemon) => {
    onSelectPokemon(pokemon); // seleccionar el pokémon
    setShowAlert(true); // mostrar el pop-up de compra
    setTimeout(() => setShowAlert(false), 2000); // ocultar el pop-up después de 2 segundos
  };

  // función para cerrar el modal
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="row">
        {pokemonList.map((pokemon, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card className="h-100">
              <Card.Img variant="top" src={`/src/assets/${pokemon.name.toLowerCase()}.png`} style={{ height: '200px', objectFit: 'cover', padding: '10px' }} />
              <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Button variant="primary" onClick={() => handleBuy(pokemon)} className="mr-2">
                  Comprar
                </Button>
                <Button variant="info" onClick={() => handleShowDetails(pokemon)} style={{ marginLeft: '7%' }}>
                  Más detalles
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {currentPokemon && (
        <ItemDetailContainer pokemon={currentPokemon} show={showModal} onHide={handleClose} />
      )}
      {/* pop-up que aparece al comprar un elemento */}
      {showAlert && (
        <div className="alert alert-success position-fixed" style={{ bottom: '20px', right: '20px' }}>
          Elemento agregado al carrito
        </div>
      )}
    </>
  );
}

export default ItemList;