import { Box, Heading } from "@chakra-ui/react";

import { Outfit } from "../components/Outfit";
import { Activities } from "../components/Activities";
import { Warning } from "../components/Warning";
import { Upcoming } from "../components/Upcoming";
import { Evening } from "../components/Evening";

export const Home = () => {
  const warnings = false;

  return (
    <Box>
      <Heading>Daytime Activities</Heading>
      <Box>
        <Outfit />
        <Activities />
      </Box>
      <Box>
        {<Evening width={warnings ? "100%" : "200%"} />}
        {warnings && <Warning />}
        <Upcoming />
      </Box>
    </Box>
  );
};
