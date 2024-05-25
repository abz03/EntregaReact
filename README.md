# Tienda de Pokemon - Entrega final React

Esta es una aplicación de e-commerce correspondiente a la entrega final del curso de react de coderhouse, una tienda de Pokemon, desarrollada utilizando React y Firebase. La aplicación permite a los usuarios navegar por una lista de productos (Pokemon), agregar productos al carrito y simular una compra.

## Características

- **Navegación de Productos**: Los usuarios pueden ver una lista de productos, filtrarlos por categorías y ver los detalles de cada producto.
- **Carrito de Compras**: Los usuarios pueden agregar productos al carrito, ver los productos en el carrito y eliminarlos si es necesario.
- **Formulario de Checkout**: Simula el proceso de compra y muestra un mensaje de confirmación al finalizar.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Biblioteca para manejar la navegación y el enrutamiento en la aplicación.
- **Firebase**: Plataforma de desarrollo de aplicaciones que incluye una base de datos en tiempo real, autenticación, y almacenamiento.
  - **Firestore**: Base de datos NoSQL de Firebase utilizada para almacenar y recuperar productos y órdenes.
- **Bootstrap**: Framework CSS para diseñar interfaces responsivas y modernas.
  - **React Bootstrap**: Biblioteca que integra Bootstrap con componentes de React.
- **Context API**: Para el manejo del estado global, como el carrito de compras.

## Instalación

1. Clona este repositorio en tu máquina local.

    git clone https://github.com/abz03/EntregaReact/tree/EntregaReactPF

2. Instala las dependencias.

    npm install

3. Instala el archivo de forma local "firebaseConfig" o crea un archivo `.env` en la raíz del proyecto con tus credenciales de Firebase o instala el archivo: (si le funciona a usted mejor, lo he intentado, de todos modos deje los comentarios en el archivo firebaseConfig)
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id
    ```

## Uso

1. Inicia el servidor de desarrollo.
   npm run dev

2. Disfrute comprando Pokemons