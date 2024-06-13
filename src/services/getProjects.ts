export interface Repository {
  name: string;
  html_url: string;
  description: string;
  // Adicione outras propriedades se precisar
}

const username = "EricFrota-Dev";
const ACCESS_TOKEN = "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"; // Substitua pelo seu token de acesso do GitHub

const getRepositories = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `token ${ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Falha ao buscar os repositórios");
    }

    const [repo]: Repository[] = await response.json();

    return repo;
  } catch (error) {
    console.error("Erro ao buscar os repositórios:", error.message);
    throw error;
  }
};

export default getRepositories;
