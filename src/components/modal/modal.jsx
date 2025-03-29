// Components:
// São como se fossem funções que viram objetos e assim são chamadas dentro de outros códigos para continuar fazendo seu efeito.

// Use Client:
// Colocar 'use client' no topo de um arquivo indica que aquele componente será renderizado no lado do cliente (navegador).
// Isso é necessário para usar hooks como useState e useEffect, que não funcionam em componentes renderizados no servidor.
"use client";

import { useState } from "react";
import { neo4j_enviar } from "@/services/page_controllers/controller_enviar";

export default function Modal({ onClose }) {
  // O imputValue começa com o seu valor vazio ""
  const [inputValue, setInputValue] = useState("");

  // Pelo nome, ao clicar, pegar o evento que isso aconteceu, e o valor captado se colocado na
  // variavel imputValue, a partir da "set", que irá atualizar o dado por meio da re-renderização
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Quando for chamado, irá trazer o componente "neo4j_enviar", e realizar a requisição para enviar
  // os dados de inputValue
  const handleSubmit = () => {
    neo4j_enviar(inputValue);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <div className="w-[90%] h-[90%] bg-white rounded-lg shadow-lg relative p-6">
        {/* Botão de Fechar */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
          // Pelo nome do prop, ele ao clicar, ele já vai ser fechado
          onClick={onClose}
        >
          ✖
        </button>

        {/* Conteúdo do Modal */}
        <div className="h-full flex flex-col justify-center items-center">
          <h2 className="text-xl mb-4 text-black">
            Digite algo no campo abaixo
          </h2>

          {/* Campo de Input */}
          <input
            type="text"
            // Vai começar com o o valor "" e depois ao depender do OnChange, vai mudar o valor
            value={inputValue}
            onChange={handleInputChange}
            className="px-4 py-2 border border-gray-300 rounded-lg mb-4 w-full"
            placeholder="Digite aqui"
          />

          {/* Botão de Enviar */}
          <button
            // Chama o neo4j_enviar, enviando o valor do imputValue
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
