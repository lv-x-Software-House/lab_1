import dotenv from 'dotenv';
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

export async function GET(req) {
  const session = driver.session();
  
  try {

    // Extrair os parâmetros da URL
    const { searchParams } = new URL(req.url);
    const label = searchParams.get("label");

    const query = `
      MATCH (nodes:${label})
      RETURN nodes
    `;

    // Executar a query
    const result = await session.run(query);

    if (result.records.length === 0) {
      return NextResponse.json(
        { message: "error" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "success",
        data: result.records
      },
      { status: 200 }
    );

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