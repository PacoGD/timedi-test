import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../page";
import { getGitHubRepos } from "../lib/data";

const mockRepos = [
  {
    name: "uiautomator2",
    full_name: "openatx/uiautomator2",
    owner: {
      login: "openatx",
      avatar_url: "https://avatars.githubusercontent.com/u/20634838?v=4",
    },
    html_url: "https://github.com/openatx/uiautomator2",
    created_at: "2017-09-17T12:20:42Z",
    updated_at: "2023-11-09T07:02:12Z",
    description: "Android Uiautomator2 Python Wrapper",
    topics: ["python", "test", "uiautomator"],
    language: "Python",
    stargazers_count: 5534,
  },
  {
    name: "uiautomator2",
    full_name: "openatx/uiautomator2",
    owner: {
      login: "openatx",
      avatar_url: "https://avatars.githubusercontent.com/u/20634838?v=4",
    },
    html_url: "https://github.com/openatx/uiautomator2",
    created_at: "2017-09-17T12:20:42Z",
    updated_at: "2023-11-09T07:02:12Z",
    description: "Android Uiautomator2 Python Wrapper",
    topics: ["python", "test", "uiautomator"],
    language: "Python",
    stargazers_count: 5534,
  },
  {
    name: "uiautomator2",
    full_name: "openatx/uiautomator2",
    owner: {
      login: "openatx",
      avatar_url: "https://avatars.githubusercontent.com/u/20634838?v=4",
    },
    html_url: "https://github.com/openatx/uiautomator2",
    created_at: "2017-09-17T12:20:42Z",
    updated_at: "2023-11-09T07:02:12Z",
    description: "Android Uiautomator2 Python Wrapper",
    topics: ["python", "test", "uiautomator"],
    language: "Python",
    stargazers_count: 5534,
  },
];

jest.mock("../lib/data", () => ({
  getGitHubRepos: jest.fn(() => mockRepos),
}));

describe("Home Component", () => {
  test("handles search input change", () => {
    render(<Home />);

    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "react" },
    });

    expect(screen.getByTestId("search-input")).toHaveValue("react");
  });

  test("handles form submission and fetches GitHub repositories", async () => {
    render(<Home />);

    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "react" },
    });
    fireEvent.submit(screen.getByTestId("search-form"));

    await waitFor(() => {
      expect(getGitHubRepos).toHaveBeenCalledWith("react");
    });

    expect(screen.getByTestId("repository-list")).toBeInTheDocument();
  });
});
