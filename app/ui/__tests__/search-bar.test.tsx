import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SearchBar } from "../search-bar";

const mockOnSearchChange = jest.fn();
const mockOnSearchSubmit = jest.fn();
const mockClearText = jest.fn();

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

test("SearchBar renders correctly with sample data", () => {
  const { getByText, getByLabelText, getByTestId } = render(
    <SearchBar
      searchText="test"
      onSearchChange={mockOnSearchChange}
      onSearchSubmit={mockOnSearchSubmit}
      clearText={mockClearText}
      repositories={sampleRepositories}
    />
  );

  const searchBar = getByTestId("search-bar");
  expect(searchBar).toBeInTheDocument();

  expect(getByText("GitHub Repositories Searcher")).toBeInTheDocument();

  if (sampleRepositories.length > 0) {
    expect(getByText("Clear")).toBeInTheDocument();
  }

  expect(getByText("Search")).toBeInTheDocument();

  fireEvent.change(getByTestId("search-input"), {
    target: { value: "newSearch" },
  });

  fireEvent.submit(getByTestId("search-form"));

  expect(mockOnSearchChange).toHaveBeenCalledWith(expect.any(Object));
  expect(mockOnSearchSubmit).toHaveBeenCalledWith(expect.any(Object));

  if (sampleRepositories.length > 0) {
    fireEvent.click(getByText("Clear"));
    expect(mockClearText).toHaveBeenCalled();
  }
});
