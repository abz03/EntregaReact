import React, { useState } from 'react';
import { Row, Col, Toast, ToastContainer } from 'react-bootstrap';
import Item from './Item';
//Esto es para yo no olvidarlo: Un "toast" es un pequeño mensaje emergente que se muestra en la pantalla para proporcionar feedback o notificaciones a los usuarios. (un pop up dicho de forma elegante)

// Componente ItemList: muestra una lista de items y un toast de notificacion
const ItemList = ({ items }) => {
    // Estado para controlar la visibilidad del toast
    const [showToast, setShowToast] = useState(false);
    // Estado para almacenar el mensaje del toast
    const [toastMessage, setToastMessage] = useState('');

    // Función que se ejecuta cuando se agrega un item al carrito
    const handleAddToCart = (itemName) => {
        // Establece el mensaje del toast con el nombre del item agregado
        setToastMessage(`Se ha agregado ${itemName} al carrito`);
        // Muestra el toast (pop up en mi mente)
        setShowToast(true);
        // Oculta el toast despues de 3 segundos
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div>
            {/* Muestra una fila de items */}
            <Row>
                {items.map(item => (
                    // Columna para cada item
                    <Col key={item.id} md={4} className="mb-3">
                        {/* Componente Item con la funcion hand..esomismo como prop */}
                        <Item item={item} onAddToCart={handleAddToCart} />
                    </Col>
                ))}
            </Row>
            {/* Contenedor del toast, fijado en la parte superior derecha, tenia un bug con esto que parecia que no se generaba, pero era producto de que no aparecia si habia bajado en la pantalla, error del terror... */}
            <ToastContainer position="top-end" className="p-3" style={{ position: 'fixed', zIndex: 1 }}>
                {/* Componente Toast, que muestra el mensaje y se oculta*/}
                <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Notificación</strong>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
};

export default ItemList;