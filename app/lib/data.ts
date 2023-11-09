import { Item, Repository } from "./definitions";

export async function getGitHubRepos(query: string): Promise<Repository[]> {
  const apiUrl = `https://api.github.com/search/repositories?q=${encodeURIComponent(
    query
  )}&per_page=100`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    const mappedRepositories: Repository[] = data.items.map((item: Item) => {
      return {
        name: item.name,
        description: item.description,
        owner: {
          login: item.owner.login,
          avatar_url: item.owner.avatar_url,
        },
        html_url: item.html_url,
        created_at: item.created_at,
        updated_at: item.updated_at,
        topics: item.topics,
        language: item.language,
        stargazers_count: item.stargazers_count,
      };
    });

    return mappedRepositories;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
