import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'; // importar el componente de lista

// componente que maneja la carga y visualización de la lista de pokémon
function ItemListContainer() {
  const [pokemonList, setPokemonList] = useState([]); // estado para almacenar la lista de pokémon
  const [selectedPokemon, setSelectedPokemon] = useState(null); // estado para el pokémon seleccionado
  const [showDetails, setShowDetails] = useState(false); // estado para controlar la visibilidad de los detalles

  useEffect(() => {
    // cargar los pokémon desde la API al montar el componente
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=12') // limitar a 12 pokémon
      .then(response => response.json())
      .then(data => {
        const promises = data.results.map(pokemon => 
          fetch(pokemon.url)
            .then(res => res.json())
            .then(details => ({
              name: details.name,
              types: details.types.map(t => t.type.name),
              weight: details.weight / 10, // convertir a kg
              features: ['feature1', 'feature2'], // agregar características estáticas como ejemplo
              price: 19.99 // precio fijo
            }))
        );
        Promise.all(promises).then(results => setPokemonList(results));
      })
      .catch(() => alert("no se ha encontrado información"));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Elije tu Pokémon</h2>
      <ItemList
        pokemonList={pokemonList} // pasar la lista de pokémon al componente de lista
        onSelectPokemon={setSelectedPokemon} // manejar la selección de un pokémon
        selectedPokemon={selectedPokemon} // pasar el pokémon seleccionado
        onShowDetails={setShowDetails} // controlar la visibilidad de los detalles
      />
    </div>
  );
}

export default ItemListContainer;