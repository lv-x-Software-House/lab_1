'use client'; // Marcar para o código rodar no cliente

import React from 'react';

const LabDropdown = () => {
  // Função para exibir o alerta quando o botão for clicado
  const handleClick = () => {
    alert('Você clicou no botão dentro do dropdown!');
  };

  return (
    <div className="w-60 bg-white border border-gray-200 rounded-md shadow-lg mt-6 absolute z-10">
      <div className="py-1">
        {/* Botão dentro do dropdown */}
        <button
          onClick={handleClick}  // Adiciona a função de clique para mostrar o alerta
          className="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Gerenciar Tarefas
        </button>
      </div>
    </div>
  );
};

export default LabDropdown;
