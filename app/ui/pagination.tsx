import { Box, PaginationItem, Pagination } from "@mui/material";
import { Repository } from "../lib/definitions";

export function PageNavigation({
  repositories,
  itemsPerPage,
  page,
  handlePageChange,
}: {
  repositories: Repository[];
  itemsPerPage: number;
  page: number;
  handlePageChange: (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => void;
}) {
  return (
    <Box display="flex" justifyContent="center">
      <Pagination
        count={Math.ceil(repositories.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        color="primary"
        variant="outlined"
        renderItem={(item) => (
          <PaginationItem
            component="div"
            {...item}
            sx={{
              color: item.selected ? "white" : "white",
            }}
          />
        )}
      />
    </Box>
  );
}
