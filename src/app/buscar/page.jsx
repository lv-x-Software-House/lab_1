"use client";

import { useEffect, useState } from 'react';
import { neo4j_buscar } from '@/services/page_controllers/controller_buscar';

export default function Buscar() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await neo4j_buscar("Frase");
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!data) {
    return <div>Nenhum dado disponível</div>;
  }

  return (
    <div>
      <ul>
        {data.data.map((item, index) => (
          item._fields.map((field, idx) => (
            <li key={`${index}-${idx}`}>{field.properties.Input}</li>
          ))
        ))}
      </ul>
    </div>
  );
}