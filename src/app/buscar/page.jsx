// Colocar 'use client' no topo de um arquivo indica que aquele componente será renderizado no lado do cliente (navegador).
// Isso é necessário para usar hooks como useState e useEffect, que não funcionam em componentes renderizados no servidor.
"use client";

// Importando os hooks que só podem ser usados com o "use client" e o componente de buscar
import { useEffect, useState } from "react";
import { neo4j_buscar } from "@/services/page_controllers/controller_buscar";

export default function Buscar() {
  // Criando duas variveis, data e loading, com duas variaveis "gatilhos", que são as sets.
  // Uma inicializada como null e a outra como o booleano true.
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Aqui está sendo usado o useEffect com parametro vazio, que faz:
  // É chamado somente uma vez, na inicialização da página/ reset da página.

  useEffect(() => {
    // Cria a função fetchData usando uma função anonima
    // o fetch data busca trazer dados ao result, a partir da propriedade "Frase"
    // que está sendo buscada com o objeto "neo4j_buscar".
    // O setData faz os dados que estão na variavel result, irem para a variavel data, e mudarem
    // a partir da re-renderização
    const fetchData = async () => {
      try {
        const result = await neo4j_buscar("Frase");
        setData(result);
      } catch (error) {
        // Caso, der um erro, mostrar a mensagem e o erro que ocorreu
        console.error("Erro ao buscar dados:", error);
      } finally {
        // Quando terminar o processo, mudar o carregamento para falso
        setLoading(false);
      }
    };

    // Chamando a função acima
    fetchData();
  }, []);

  // Quando loading === true, mostrar carregando
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Quando o dado estiver "negativo" (null, 0, vazio[]), o "!" faz ele entrar como se fosse uma
  // operaração matemática. Negativo com negativo, fica positivo, entrando na condição.
  // Quando estiver um dado válido, "positivo"(uma string, um array sem ser vazio), o "!" fez ele
  // não entrar na condição, negativo com positivo continua negativo, não passando na condição
  if (!data) {
    return <div>Nenhum dado disponível</div>;
  }

  return (
    <div>
      <ul>
        {/* Pega o objeto data, usa da propriedade data, e organiza como um array com o .map */}
        {/* Passando as "colunas" de nome item e index */}
        {/* o mesmo ocorre para o item.fildes.map */}
        {/* O key é para mudanças neste "array", influênciarem somente o dado correto, a chave unica */}
        {data.data.map((item, index) =>
          item._fields.map((field, idx) => (
            <li key={`${index}-${idx}`}>{field.properties.Input}</li>
          ))
        )}
      </ul>
    </div>
  );
}
