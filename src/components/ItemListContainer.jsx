import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

// Define el componente ItemListContainer
function ItemListContainer() {
  // Crea un estado para almacenar la lista de pokemon
  const [pokemonList, setPokemonList] = useState([]);

  // useEffect se ejecutará cuando el componente se monte
  useEffect(() => {
    // Realiza una llamada a la API para obtener una lista de pokemon
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=6')
      .then(response => response.json()) // Convierte la respuesta en json
      .then(data => {
        setPokemonList(data.results); // Actualiza el estado con los resultados
      })
      .catch(() => {
        alert("no se ha encontrado informacion"); // Muestra un mensaje si hay un error
      });
  }, []); // El array vacio asegura que el efecto se ejecute solo una vez

  // Renderiza el componente
  return (
    <div className="container mt-5">
      <h2>Elije tu pokemon</h2>
      <ItemList pokemonList={pokemonList} /> {/* Envía la lista de pokemon al componente ItemList.jsx para mostrarla */}
    </div>
  );
}

// Exporta el componente para que pueda ser usado en otras partes de la aplicacion
export default ItemListContainer;