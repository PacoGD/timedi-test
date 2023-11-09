import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid,
  Link,
  Chip,
  Typography,
} from "@mui/material";
import { Repository } from "../lib/definitions";
import { formatDistanceToNowfromDate } from "../lib/utils";

const listItemStyle = {
  border: "1px solid #fff",
  borderRadius: "8px",
  margin: "5px",
  textDecoration: "none",
};

export const RepositoryCard = ({ repository }: { repository: Repository }) => {
  return (
    <Link
      href={repository.html_url}
      target="_blank"
      rel="noopener noreferrer"
      sx={listItemStyle}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt={repository.owner.login}
            src={repository.owner.avatar_url}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <Typography
                component="div"
                sx={{ textDecoration: "underline", color: "primary" }}
              >
                {repository.name}
              </Typography>
              <Grid container spacing={1} sx={{ flexDirection: "column" }}>
                <Grid item>
                  <Typography
                    component={"span"}
                    variant="body2"
                    color="primary"
                  >
                    Created:{" "}
                    {formatDistanceToNowfromDate(repository.created_at) || "-"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component={"span"}
                    variant="body2"
                    color="primary"
                  >
                    Updated:{" "}
                    {formatDistanceToNowfromDate(repository.updated_at) || "-"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component={"span"}
                    variant="body2"
                    color="primary"
                  >
                    Language: {repository.language || "-"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component={"span"}
                    variant="body2"
                    color="primary"
                  >
                    Stars: {repository.stargazers_count || "-"}
                  </Typography>
                </Grid>
                <Grid item>
                  {repository.topics.map((topic: string, index: React.Key) => (
                    <Chip
                      key={index}
                      label={topic}
                      variant="outlined"
                      color="primary"
                      sx={{ margin: "2px" }}
                    />
                  ))}
                </Grid>
              </Grid>
            </>
          }
        />
      </ListItem>
    </Link>
  );
};
