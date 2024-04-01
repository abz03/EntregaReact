import React from 'react';
import viteLogo from '/vite.svg' /* dejo ese import por si lo uso en su momento */
import './App.css'
import NavBar from './components/NabBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <div>
      {/* Renderiza el componente NavBar */}
      <NavBar />
      {/* Renderiza el componente ItemListContainer */}
      <ItemListContainer articulos="Lista de articulos" />
    </div>
    );
  }


  /* Lo dejo por si hay alguna cosa que quiero volver a ver en el futuro
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Dejen dormir</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Veces que no me han dejado dormir: {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click Logos pa sapear documentacion Vite and React
      </p>
    </>
  ) */


export default App
