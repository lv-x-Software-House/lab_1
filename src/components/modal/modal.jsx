'use client';

import { useState } from 'react';
import { neo4j_enviar } from '@/services/page_controllers/controller_enviar';

export default function Modal({ onClose }){
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = () => {
        neo4j_enviar(inputValue);
    }

    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <div className="w-[90%] h-[90%] bg-white rounded-lg shadow-lg relative p-6">
                    {/*Definição do botão responsável por fechar o modal*/}
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
                    >Fechar</button>

                <div className="h-full flex flex-col justify-center items-center">
                    <h2 className="text-xl mb-4 text-black">Insira o texto abaixo</h2>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg mb-4 w-full"
                        placeholder="Insira o texto"
                    />

                    <button
                        onClick = {handleSubmit}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >Enviar</button>
                </div>

            </div>
        </div>
    )
}