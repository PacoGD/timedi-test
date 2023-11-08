"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import {
  Box,
  CircularProgress,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import { getGitHubRepos } from "./lib/data";
import { Repository } from "./lib/definitions";
import { SearchBar } from "./ui/search-bar";
import { About } from "./ui/about";
import { PageNavigation } from "./ui/pagination";
import { RepositoryList } from "./ui/repository-list";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setRepositories([]);
    const gitHubRepos = await getGitHubRepos(searchQuery);
    setRepositories(gitHubRepos);
    setLoading(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedRepositories = repositories.slice(startIndex, endIndex);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const clearList = () => {
    setRepositories([]);
  };

  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <Box width={1000}>
          <SearchBar
            searchText={searchQuery}
            onSearchChange={handleInputChange}
            onSearchSubmit={handleSubmit}
            clearText={clearList}
            repositories={repositories}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "50vh",
            }}
          >
            {loading ? (
              <CircularProgress />
            ) : repositories.length > 0 ? (
              <RepositoryList repositories={displayedRepositories} />
            ) : (
              <About />
            )}
          </div>
        </Box>
        {repositories.length > itemsPerPage && (
          <PageNavigation
            repositories={repositories}
            itemsPerPage={itemsPerPage}
            page={page}
            handlePageChange={handlePageChange}
          />
        )}
      </main>
    </ThemeProvider>
  );
}
