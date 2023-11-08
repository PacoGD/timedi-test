import { Container, Grid, List } from "@mui/material";
import { Masonry } from "@mui/lab";
import { Repository } from "../lib/definitions";
import { RepositoryCard } from "./repository-item";

export const RepositoryList = ({
  repositories,
}: {
  repositories: Repository[];
}) => {
  return (
    <Container>
      <Masonry columns={3}>
        {repositories.map((repository: Repository, index: React.Key) => (
          <RepositoryCard key={index} repository={repository} />
        ))}
      </Masonry>
    </Container>
  );
};
