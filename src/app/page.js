import React from 'react';

export default function Home() {

  // Parte lógica do componente
  const handleClick = () => {
    console.log("Botão clicado!");
  };

  return (

    // Parte visual do componente

    <div>
      <h1>Laboratório</h1>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
    
  );
}