const baseUrl = 
        typeof window !== 'undefined' && window.location.origin
          ? window.location.origin
          : process.env.NEXT_PUBLIC_BASE_URL;

// Validar usuário
export const neo4j_auth_validate = async (username, password) => {
          try {
            const response = await fetch(
              `${baseUrl}/api/neo4j/auth_validate?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
    
        if (response.ok) {
          return await response.json();
        } else {
          throw new Error(`Erro ao validar o usuário: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Erro ao validar o usuário:', error);
        throw error;
      }
    };

