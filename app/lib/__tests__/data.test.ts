import fetchMock from "jest-fetch-mock";
import { getGitHubRepos } from "../data";
import response from "./response.json";
import { Repository } from "../definitions";
fetchMock.enableMocks();

describe("getGitHubRepos", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches data from GitHub API and maps it correctly", async () => {
    const mockResponse = {
      items: [response.items[0]],
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const query = "example";
    const repositories = await getGitHubRepos(query);

    expect(fetchMock).toHaveBeenCalledWith(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(
        query
      )}&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    const expectedRepository: Repository = {
      name: mockResponse.items[0].name,
      description: mockResponse.items[0].description,
      owner: {
        login: mockResponse.items[0].owner.login,
        avatar_url: mockResponse.items[0].owner.avatar_url,
      },
      html_url: mockResponse.items[0].html_url,
      created_at: mockResponse.items[0].created_at,
      updated_at: mockResponse.items[0].updated_at,
      topics: mockResponse.items[0].topics,
      language: mockResponse.items[0].language,
      stargazers_count: mockResponse.items[0].stargazers_count,
    };

    expect(repositories).toEqual([expectedRepository]);
  });

  it("handles fetch error", async () => {
    fetchMock.mockRejectOnce(new Error("Fetch error"));

    const query = "example";

    await expect(getGitHubRepos(query)).rejects.toThrowError("Fetch error");
  });
});
