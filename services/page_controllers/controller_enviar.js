// Salvar Zeni Agent
//
export const neo4j_enviar = async (enviar) => {
  try {
    const formData = new FormData();
    // Ele vai colocar na variavel criada dentro de formData, enviar(que está entre aspas)
    // a informação pega no navegador e colocar dentro dessa variavel
    formData.append("enviar", enviar);

    // Ao chamar o respose, quando estiver no "api/enviar", ele terá a propriedade de post (enviar) e formData
    const response = await fetch("/api/enviar", {
      method: "POST",
      body: formData,
    });

    // Se não der certo, vai mostrar o arquivo do upload que deu errado
    if (!response.ok) {
      throw new Error(
        `Erro ao fazer upload do arquivo: ${response.statusText}`
      );
    }

    // Ele vai esperar o response dar certo para trazer os dados para o responseData vindo do response no formato json
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Erro ao fazer upload do arquivo:", error);
    throw error;
  }
};
