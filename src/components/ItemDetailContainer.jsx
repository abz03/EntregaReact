import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

// Simulando datos de productos
const products = [
    { id: '1', name: 'Producto 1', description: 'Descripción del Producto 1', price: 100, stock: 10 },
    { id: '2', name: 'Producto 2', description: 'Descripción del Producto 2', price: 200, stock: 20 },
    // Agrega más productos según sea necesario
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