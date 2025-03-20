import dotenv from 'dotenv';
import neo4j from 'neo4j-driver';
import { NextResponse } from 'next/server';

//Importar as informações do arquivo .env.
dotenv.config();

//Atribuir as credenciais da DB ao driver de conexão.
const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(
        process.env.NEO4J_USERNAME,
        process.env.NEO4J_PASSWORD
    )
);

export async function POST(req){
    const session = driver.session();

    try {
        // Extrair os dados do corpo da requisição.
        const formData = await req.formData();
        const session_data = formData.get('enviar');

        //Atribuição do comando de criação e inserção da request na DB.
        const query = `
        CREATE (x:Frase {
            Input: $input
        })
        RETURN x
        `;

        //Substituição do parâmetro $input pela request recebida.
        const params = {
            input: session_data
        };

        //Executa a query na DB
        const result = await session.run(query, params);
        console.log(result);
        
        //Retorna o status 404 e a mensagem de erro caso a resposta da db tenha tamanho 0.
        if (result.records.length === 0) {
            return NextResponse.json(
              { message: "error" },
              { status: 404 }
            );
        }
      
        //Caso a resposta passe na verificação acima, retorna o status 200.
        return NextResponse.json(
            {
              message: "success",
              data: result.records
            },
            { status: 200 }
        );

    } catch(error){
        console.log("Erro ao persistir os dados", error)
        throw error;
    }
}