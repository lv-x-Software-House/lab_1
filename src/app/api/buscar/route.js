import dotenv from "dotenv";
import { NextResponse } from "next/server";
import neo4j from "neo4j-driver";

dotenv.config();

// Configuração do driver Neo4j fora da função handler para reutilização
// É criado, como se fosse um objeto driver, e dentro dele tem as propriedades do caminho ao banco, usuario e senha.
const driver = neo4j.driver(
  // Chama o caminho para o banco de dados
  process.env.NEO4J_URI,
  // Pega o usuário e a senha do banco de dados, que foram importados acima.
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

// Vai criar a função GET, para buscar os dados a partir do parametro "req" no banco
export async function GET(req) {
  // Pega as informações necessárias dentro do obejto driver para iniciar a sessão
  const session = driver.session();

  try {
    // Extrair os parâmetros da URL
    // Declara o searchParams e diz ao label, o que o searchParams deve procurar
    const { searchParams } = new URL(req.url);
    const label = searchParams.get("label");

    // Busca todos os nodes que possuem o label indicado pela variável ${label} e os retorna.
    const query = `
      MATCH (nodes:${label})
      RETURN nodes
    `;

    // Executar a query
    const result = await session.run(query);

    // Se não tiver dados em results, retorna um erro
    if (result.records.length === 0) {
      return NextResponse.json({ message: "error" }, { status: 404 });
    }

    // Se não, traz o dado e uma mensagem de sucesso
    return NextResponse.json(
      {
        message: "success",
        data: result.records,
      },
      { status: 200 }
    );
    // Mensagens de erros diferentes
  } catch (error) {
    console.error("catch error:", error);
    return NextResponse.json(
      {
        error: "catch error:",
        message: error.message,
      },
      { status: 500 }
    );
  } finally {
    //fecha a sessão
    await session.close();
  }
}

// Fechar o driver quando o processo terminar
process.on("exit", async () => {
  await driver.close();
});
