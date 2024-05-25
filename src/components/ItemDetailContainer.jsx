import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../firebase/firebase';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id).then((data) => {
            setItem(data);
            setLoading(false);
        }).catch(error => {
            console.error("Error obteniendo producto: ", error);
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="item-detail-container">
            {loading ? <p>Cargando...</p> : item ? <ItemDetail item={item} /> : <p>Producto no encontrado</p>}
        </div>
    );
};

export default ItemDetailContainer;