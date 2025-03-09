// Diretiva use client
'use client';

// Sentenças de importação
import { useState } from 'react';
import Modal from '@/src/components/modal/modal.jsx';

// Export padrão da página
export default function Enviar() {
  
  // Definição de states
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funções de controle de state
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  // Definição de funções
  const handleButtonClick = () => {
    openModal();
  };

// Início da parte visual da página
  return (
    <div>
      <h1>Laboratório</h1>
      
      {/* Botão que abre o modal */}
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Enviar Informações
      </button>

      {/* Renderização condicional do modal */}
      {isModalOpen && (
        <Modal onClose={closeModal}> </Modal>
      )}
    </div>
  );
}
