'use client';

import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 h-full p-4 bg-gray-800 text-white flex flex-col space-y-4">
      <button 
        className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        onClick={() => router.push('/enviar')}
      >
        Enviar
      </button>
      <button 
        className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
        onClick={() => router.push('/buscar')}
      >
        Buscar
      </button>
    </aside>
  );
};
