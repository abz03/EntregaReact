import React from 'react';

function ItemList({ pokemonList }) {
  return (
    <ul className="item-list">
      {pokemonList.map((pokemon, index) => (
        <li className="item" key={index}>
          {pokemon.name} {/* Muestra el nombre de cada pokemon */}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;