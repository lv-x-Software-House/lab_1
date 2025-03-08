import dotenv from 'dotenv';

//Route POST com neo4j
import { NextResponse } from 'next/server';
import neo4j from 'neo4j-driver';

dotenv.config();

// Configuração do driver Neo4j fora da função handler para reutilização
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(
    process.env.NEO4J_USER,
    process.env.NEO4J_PASSWORD
  )
);

export async function POST(req) {
  const session = driver.session();

  try {
    // Extrair os dados do corpo da requisição
    const formData = await req.formData();
    const session_data = formData.get('enviar');

    const query = `
    CREATE (x:Frase {
        Input: $input
    })
    RETURN x
    `;

    const params = {
        input: session_data
    };

    // Executar a query
    const result = await session.run(query, params);

    if (result.records.length > 0) {
      return NextResponse.json(
        { message: "success" },
        { status: 200 }
      );

    } else {
      return NextResponse.json(
        { message: "error" },
        { status: 404 }
      );
    }

  } catch (error) {
    console.error("catch error:", error);
    return NextResponse.json(
      {
        error: "catch error:",
        message: error.message
      },
      { status: 500 }
    );
  } finally {
    await session.close();
  }
}

// Fechar o driver quando o processo terminar
process.on('exit', async () => {
  await driver.close();
});