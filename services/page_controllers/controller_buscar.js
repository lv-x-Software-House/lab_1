import dotenv from "dotenv";

dotenv.config();

// Window = está no navegador
// Ambiente	   ////  Como baseUrl é definido?
// Frontend (navegador)	//////  window.location.origin (URL do site)
// Backend (Next.js Server)	////  process.env.NEXT_PUBLIC_BASE_URL (do .env)

const baseUrl =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : process.env.NEXT_PUBLIC_BASE_URL;

// Validar usuário
// Ele vai fazer pegar um dado do navegador e fazer juntar na busca da API
// Por exemplo será escrito "João" no navegador e a URL ficará:
// meusite.com/api/buscar?label=Joao(fazer a ajuda com os carecteres)
// Se der tudo certo, ele vai esperar o Json
// Se não vai retornar ou o usuário que de erro ou onde que deu erro
export const neo4j_buscar = async (label) => {
  try {
    const response = await fetch(
      `${baseUrl}/api/buscar?label=${encodeURIComponent(label)}`, // O encode serve para ajudar com caracteres especiais
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Erro ao validar o usuário: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Erro ao validar o usuário:", error);
    throw error;
  }
};
