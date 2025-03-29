//Colocar 'use client' no topo de um arquivo indica que aquele componente será renderizado no lado do cliente (navegador).
// Isso é necessário para usar hooks como useState e useEffect, que não funcionam em componentes renderizados no servidor.
"use client";

// Importações
import { useState } from "react";
import Modal from "@/src/components/modal/modal.jsx";

// Export padrão da página
export default function Enviar() {
  // Definição de states, usando o UseState
  // Dizendo basicamente que o IsModalOpen é criado com o valor booleano "false"
  // E o SetIsModalOpen é uma "variavel de gatilho", quando chamada, troca o valor de isModalOpen
  // Fazendo a re-renderização do componente
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funções de controle de state
  // Quando chamar o openModal, irá mudar o valor para True
  // Quando chamar o closeModal, mudar o valor para false
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
        // Chama a função para tornar truem ou seja, abrir o "modal"
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Enviar Informações
      </button>

      {/* Renderização condicional do modal */}
      {/* Caso isModalOpen ser "true", ele verifica o segundo "parametro" */}
      {/* Que é o componente modal aparecendo, e quando aparecer, e for fechado (onClose), chama o prop */}
      {/* closeModal, e muda o valor de isModalOpen novamente para "false*/}
      {isModalOpen && <Modal onClose={closeModal}> </Modal>}
    </div>
  );
}
