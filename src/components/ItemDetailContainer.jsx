import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// componente que muestra los detalles del pokémon en un modal
function ItemDetailContainer({ pokemon, show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles de {pokemon.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Tipo:</strong> {pokemon.types.join(", ")}</p>
        <p><strong>Peso:</strong> {pokemon.weight} kg</p>
        <p><strong>Características:</strong> {pokemon.features.join(", ")}</p>
        <p><strong>Precio:</strong> $19.99</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ItemDetailContainer;
