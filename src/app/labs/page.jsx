'use client'; // Marcar para o código rodar no cliente

import React, { useState } from 'react';
import LabDropdown from '../../components/dropdown/lab_dropdown';


export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Função para alternar o estado de abertura do dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Botão que alterna o dropdown */}
      <button
        onClick={toggleDropdown}
        className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300 -mt-19"
      >
        Clique aqui
      </button>

      {/* Renderização condicional para o dropdown */}
      {isDropdownOpen && (
        <LabDropdown /> // Exibe o componente LabDropdown quando o estado está aberto
      )}
    </div>
  );
}
