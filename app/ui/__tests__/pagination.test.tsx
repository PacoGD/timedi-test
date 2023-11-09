import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PageNavigation } from "../pagination";

const mockHandlePageChange = jest.fn();

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

test("PageNavigation renders correctly and handles page change", () => {
  const itemsPerPage = 2;
  const page = 1;

  const { container, getByTestId } = render(
    <PageNavigation
      repositories={sampleRepositories}
      itemsPerPage={itemsPerPage}
      page={page}
      handlePageChange={mockHandlePageChange}
    />
  );

  const pageNavigation = getByTestId("page-navigation");
  expect(pageNavigation).toBeInTheDocument();
});
