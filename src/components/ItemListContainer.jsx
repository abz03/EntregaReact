import React from 'react';

const ItemListContainer = ({ articulos }) => {
  return (
    <div className="item-list-container">
      <h3>{articulos}</h3>
    </div>
  );
};

export default ItemListContainer;