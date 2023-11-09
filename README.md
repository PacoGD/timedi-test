# NextJS Github Repository Search App

This project is a Next.js application with TypeScript that allows you to search and explore GitHub repositories. It includes the following features:

## Features

### 1. GitHub Repository Search

The application provides a GitHub repository search functionality that connects to the GitHub API and returns paginated results. For more information on the GitHub Search API, refer to [GitHub Search API Documentation](https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-repositories).

### 2. Display Search Results

The search results are displayed in a paginated list, showing the following details for each repository:

- Owner's Name
- Repository Name and Description
- Owner's Avatar Image
- Creation Date and Last Update Date
- Topics of the Repository
- Repository Language
- Number of Stars

### 3. Clickable Repository Items

Each repository item in the list is clickable. Clicking on an item opens the corresponding GitHub repository URL in a new tab.

## Getting Started

To run the application locally, follow these steps:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the application:

   ```bash
   npm run dev
   ```

3. Visit [http://localhost:3000](http://localhost:3000) in your browser to access the application.

## Folder Structure

The project structure follows these conventions:

- `app`: Contains the Next application.
- `__tests__`: Houses tests throughout the entire application.
- `ui`: Houses reusable components.
- `lib`: Contains shared functions and utilities, as well as data fetching functions.

## Testing

Testing is an essential aspect of this project. Use the following command to run unit tests:

```bash
npm test
```
