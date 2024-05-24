import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

// Simulando datos de productos
const products = [
    { id: '1', name: 'bulbasaur', description: 'Descripción de bulbasaur', price: 100, stock: 10, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: '2', name: 'ivysaur', description: 'Descripción de ivysaur', price: 200, stock: 10, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: '3', name: 'venusaur', description: 'Descripción de venusaur', price: 300, stock: 10, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: '4', name: 'charmander', description: 'Descripción de charmander', price: 100, stock: 10, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: '5', name: 'charmeleon', description: 'Descripción de charmeleon', price: 200, stock: 10, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: '6', name: 'charizard', description: 'Descripción de charizard', price: 300, stock: 10, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: '7', name: 'squirtle', description: 'Descripción de squirtle', price: 100, stock: 10, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: '8', name: 'wartortle', description: 'Descripción de wartortle', price: 200, stock: 10, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: '9', name: 'blastoise', description: 'Descripción de blastoise', price: 300, stock: 10, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: '10', name: 'caterpie', description: 'Descripción de caterpie', price: 50, stock: 10, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: '11', name: 'metapod', description: 'Descripción de metapod', price: 70, stock: 10, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: '12', name: 'butterfree', description: 'Descripción de butterfree', price: 90, stock: 10, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' }
];
const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id));
        }, 500);
    });
};

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getItem(id).then((data) => setItem(data));
    }, [id]);

    return (
        <div className="item-detail-container">
            {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
        </div>
    );
};

export default ItemDetailContainer;