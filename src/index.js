import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <>
      <h1>Bienvenidos a CECyTEM Metepec II</h1>
      <button>Animación digital</button>
      <button>Programación</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
