import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

function ItemListContainer() {
  const [pokemonList, setPokemonList] = useState([]); // Estado para almacenar los pokemon

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=6') // Llamada a la API para obtener datos
      .then(response => response.json())
      .then(data => setPokemonList(data.results)); // Actualización del estado con los datos recibidos
  }, []);

  return (
    <div className="container mt-5">
      <h2>Elije tu pokemon</h2>
      <ItemList pokemonList={pokemonList} /> {/* Pasa los datos del pokemon al componente ItemList para renderizar */}
    </div>
  );
}

export default ItemListContainer;