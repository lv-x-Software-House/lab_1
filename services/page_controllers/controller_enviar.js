
export const neo4j_enviar = async (enviar) => {
    try{
        const formData = new FormData();
        formData.append('enviar', enviar);
        const response = await fetch('/api/enviar', {
            method: 'POST',
            body: formData
        })
    } catch (error){
        console.log("Erro no envio do arquivo", error);
        throw error;
    }
};