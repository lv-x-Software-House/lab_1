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

// Vai criar a função POST para enviar o parametro "req"
export async function POST(req) {
  // Pega e inicia a sessão, com o caminho, usuário e senha
  const session = driver.session();

  try {
    // Extrair os dados do corpo da requisição
    const formData = await req.formData();
    const session_data = formData.get("enviar");

    // cria o "sql" para chamar, colocando a informação $imput no banco
    const query = `
    CREATE (x:Frase {
        Input: $input
    })
    RETURN x
    `;

    // O imput vai ser os dados pegos da minha sessão
    const params = {
      input: session_data,
    };

    // Executar a query
    const result = await session.run(query, params);

    // Se tiver algum dado em result, mostra sucesso, se não, mostra erro
    if (result.records.length > 0) {
      return NextResponse.json({ message: "success" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "error" }, { status: 404 });
    }
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
    // Fecha a sessão com banco
    await session.close();
  }
}

// Fechar o driver quando o processo terminar
process.on("exit", async () => {
  await driver.close();
});
