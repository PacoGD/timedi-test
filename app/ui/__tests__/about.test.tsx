import React from "react";
import { render, screen } from "@testing-library/react";
import { About } from "../about";

test("renders the About component", () => {
  render(<About />);

  // Use TypeScript-specific queries to select elements
  const logo = screen.getByAltText("GitHub Repositories Logo");
  const title = screen.getByText("Search for Super Cool Repositories!");
  const description = screen.getByText(
    "Find the most impressive repositories on this platform."
  );

  // Assert that the component renders the expected content
  expect(logo).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
