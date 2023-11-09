import React from "react";
import { render } from "@testing-library/react";
import { RepositoryList } from "../repository-list";

const sampleRepositories = [
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

test("RepositoryList renders correctly with sample data", () => {
  const { container, getAllByTestId } = render(
    <RepositoryList repositories={sampleRepositories} />
  );

  const repositoryList = container.querySelector(".MuiContainer-root");
  expect(repositoryList).toBeInTheDocument();
});
