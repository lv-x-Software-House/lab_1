'use client';

import { useState } from "react";
import Modal from "@/src/components/modal/modal";

export default function Home() {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const buttonClick = () => {
    openModal();
  }

    return (
      <div>
        
        {/* Botão que faz a abertura do modal, definindo o isModalOpen para true*/}
        <button 
          onClick={buttonClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors" 
        >Abrir modal</button>

        {/* 
          Condicional responsável por abrir e fechar o modal. Caso isModalOpen seja true, o resto da função
          após && será executada, caso seja false, não será. Passamos uma função onClose no próprio objeto modal
          para quando o cliente clicar na opção de fechar modal, o próprio modal definirá isModalOpen para false.
        */}
        {isModalOpen && (
          <Modal onClose={closeModal}></Modal>
        )}
      </div>
    );
  }
  