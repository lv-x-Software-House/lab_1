// Salvar Zeni Agent
export const neo4j_enviar = async (enviar) => {
    
    try {
      
        const formData = new FormData();
      formData.append('enviar', enviar);
  
      const response = await fetch('/api/enviar', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao fazer upload do arquivo: ${response.statusText}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Erro ao fazer upload do arquivo:', error);
      throw error;
    }
  };