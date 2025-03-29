// Colocar 'use client' no topo de um arquivo indica que aquele componente será renderizado no lado do cliente (navegador).
// Isso é necessário para usar hooks como useState e useEffect, que não funcionam em componentes renderizados no servidor.
"use client";

import { useRouter } from "next/navigation";
// Pega o caminho que está no código/pasta, como por exemplo:
// Pega o "meuSite.com/main/" ou o "lab_1/src/app/"

export default function Sidebar() {
  // Aqui coloca o caminho dentro da varivel router
  const router = useRouter();

  return (
    <aside className="w-64 h-full p-4 bg-gray-800 text-white flex flex-col space-y-4">
      <button
        className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        // Quando clicar no botão "enviar", o caminho vai ser completado com o /enviar, como por exemplo
        // meuSite.com/main/enviar ou lab_1/src/app/enviar
        onClick={() => router.push("/enviar")}
      >
        Enviar
      </button>
      <button
        className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
        // Quando clicar no botão "buscar", o caminho vai ser completado com o /buscar, como por exemplo
        // meuSite.com/main/buscar ou lab_1/src/app/buscar
        onClick={() => router.push("/buscar")}
      >
        Buscar
      </button>
    </aside>
  );
}
