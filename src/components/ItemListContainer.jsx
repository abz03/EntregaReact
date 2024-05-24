import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const getProducts = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => response.json())
        .then(data => {
            return data.results.map((pokemon, index) => ({
                id: index.toString(),
                name: pokemon.name,
                description: 'Pokemon description',  // Agregar una descripción
                price: Math.floor(Math.random() * 100) + 1,  // Precio aleatorio
                stock: 10,  // Stock fijo
                imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`  // URL de la imagen
            }));
        });
};

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) => {
            setItems(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="item-list-container">
            {loading ? <p>Cargando...</p> : <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer;