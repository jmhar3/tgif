import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

import { Weather } from "./components/Weather";
import { Home } from "./pages/Home";
import { Navigation } from "./components/Navigation";

// Selecting an activity/outfit returns suggested items required

function App() {
  return (
    <Box>
      <Navigation />
      <Home/>
      <Weather />
    </Box>
  );
}

export default App;
