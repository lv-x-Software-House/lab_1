import dotenv from 'dotenv';
import neo4j from 'neo4j-driver';

dotenv.config();

const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(
        process.env.NEO4J_USERNAME,
        process.env.NEO4J_PASSWORD
    )
);

console.log('process.env.NEO4J_URI', process.env.NEO4J_URI);
console.log('process.env.NEO4J_USER', process.env.NEO4J_USERNAME);
console.log('process.env.NEO4J_PASSWORD', process.env.NEO4J_PASSWORD);

export async function POST(req){
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

        const result = await session.run(query, params);
        
        console.log(result);

    } catch(error){
        console.log("Erro ao persistir os dados", error)
        throw error;
    }
}