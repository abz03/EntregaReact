import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../firebase/firebase';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) => {
            setItems(data);
            setLoading(false);
        }).catch(error => {
            console.error("Error obteniendo productos: ", error);
        });
    }, []);

    return (
        <div className="item-list-container">
            {loading ? <p>Cargando...</p> : <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer;