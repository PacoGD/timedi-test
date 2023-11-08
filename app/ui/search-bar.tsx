import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { Repository } from "../lib/definitions";

export const SearchBar = ({
  searchText,
  onSearchChange,
  onSearchSubmit,
  clearText,
  repositories,
}: {
  searchText: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.FormEvent) => void;
  clearText: () => void;
  repositories: Repository[];
}) => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "black",
      }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" style={{ color: "white" }}>
          GitHub Repositories Searcher
        </Typography>
        <div style={{ display: "flex" }}>
          {repositories.length > 0 && (
            <Button
              onClick={clearText}
              variant="outlined"
              color="primary"
              type="submit"
              size="small"
            >
              Clear
            </Button>
          )}
          <form onSubmit={onSearchSubmit}>
            <TextField
              variant="standard"
              onChange={onSearchChange}
              value={searchText}
              size="small"
              style={{ marginRight: "8px", marginLeft: "8px" }}
              inputProps={{
                style: { color: "white" },
              }}
              focused
              color="primary"
            />
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              size="small"
            >
              Search
            </Button>
          </form>
        </div>
      </Toolbar>
      <Box borderBottom={2} borderColor="primary.main" marginBottom={5} />
    </AppBar>
  );
};
