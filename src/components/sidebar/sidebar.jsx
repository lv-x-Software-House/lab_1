//Define a renderização no lado do cliente.
'use client'; 

//Importa o useRouter, hook que lida com a navegação entre as rotas da aplicação.
import { useRouter } from "next/navigation";

//Define e exporta a Sidebar como component.
export default function Sidebar() {

    //Atribui o useRouter() para uma constante.
    const router = useRouter();
    return (
      //Uso do tailwind para design da sidebar e dos botões.
      //Definição dos botões que levarão para as rotas /enviar e /buscar.
      <aside className="w-64 h-full p-4 bg-gray-800 text-white flex flex-col space-y-4">
        <button 
        className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        onClick={() => router.push("/enviar")}>Enviar</button>
        <button 
        className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        onClick={() => router.push("/buscar")}>Buscar</button>
      </aside>
    );
  }