import { useMemo } from "react";
import { Stack, VStack, HStack, Heading, Img, Box } from "@chakra-ui/react";

import { ActivityHighlight } from "./ActivityHighlight";
import { StickerChart } from "./RewardChart";
import { ActivityButton } from "../../buttons/ActivityButton";
import { useActivities } from "../../../hooks/useActivities";

export const Activities = () => {
  const { activities } = useActivities();

  return (
    <Stack w="100%">
      <Stack w="100%" direction={["column", "row"]} spacing="3">
        <ActivityHighlight />
        <StickerChart />
      </Stack>

      <HStack>
        {activities.map((activity) => (
          <ActivityButton {...activity} />
        ))}
      </HStack>
    </Stack>
  );
};
