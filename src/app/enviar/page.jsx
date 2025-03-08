'use client';

import { useState } from 'react';

// 1. Importação do componente Modal
import Modal from '@/src/components/modal/modal.jsx';

export default function Home() {
  // 2. Definição de state para controle do estado do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 3. Definição de funções de controle de estado
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleButtonClick = () => {
    console.log("Botão clicado!");
    openModal();  // Abre o modal quando o botão for clicado
  };

  return (
    <div>
      <h1>Laboratório</h1>
      
      {/* Botão que abre o modal */}
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Clique aqui
      </button>

      {/* 4. Renderização condicional do modal */}
      {isModalOpen && (
        <Modal onClose={closeModal}> </Modal>
      )}
    </div>
  );
}
