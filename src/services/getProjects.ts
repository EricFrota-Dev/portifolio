export interface Repository {
  name: string;
  html_url: string;
  description: string;
}

const username = "EricFrota-Dev";
// const ACCESS_TOKEN = "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"

const getRepositories = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    if (!response.ok) {
      throw new Error("Falha ao buscar os repositórios");
    }

    const [repo]: Repository[] = await response.json();

    return repo;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao buscar os repositórios:", error.message);
      throw error;
    } else {
      console.error("Erro desconhecido ao buscar os repositórios:", error);
      throw new Error("Erro desconhecido ao buscar os repositórios");
    }
  }
};

export default getRepositories;
