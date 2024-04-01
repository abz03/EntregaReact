import React from 'react';

const ItemListContainer = ({ articulos }) => {
  return (
    <div className="item-list-container">
      <h3>{articulos}</h3>
      {/* Aquí irá el contenido principal de la aplicación */}
    </div>
  );
};

export default ItemListContainer;