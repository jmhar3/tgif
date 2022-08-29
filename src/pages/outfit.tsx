import { Box, Heading } from "@chakra-ui/react";

import { DefaultLayout } from "../components/layout/DefaultLayout";

function OutfitDashboard() {
  return (
    <DefaultLayout>
      <Heading>Plan for the weather</Heading>
      {/* include wind warning for hair, gloss */}
      {/* bright skies warning for sunnies, sunscreen */}
    </DefaultLayout>
  );
}

export default OutfitDashboard;
