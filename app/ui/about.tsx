import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const About = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="300px"
      bgcolor="black"
      color="white"
    >
      <Image
        src="bullseye.svg"
        alt="GitHub Repositories Logo"
        width={200}
        height={200}
        priority
      />
      <Typography variant="h4" gutterBottom>
        Search for Super Cool Repositories!
      </Typography>
      <Typography variant="body1">
        Find the most impressive repositories on this platform.
      </Typography>
    </Box>
  );
};
