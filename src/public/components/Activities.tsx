import { useMemo } from "react";
import { Stack, VStack, HStack, Heading, Img, Box } from "@chakra-ui/react";

import { ActivityHighlight } from "./ActivityHighlight";
import { StickerChart } from "./RewardChart";

export const Activities = () => {
  return (
    <Stack w="100%">
      <Stack w="100%" direction={["column", "row"]}>
        <ActivityHighlight />
        <StickerChart />
      </Stack>

      {/* <VStack
        bg="neutral.boldSheer"
        borderRadius="lg"
        align="flex-start"
        justify="flex-end"
        w="100%"
        p="5"
        pt="12"
        spacing="3"
      >
        <Heading fontSize="md">Warm and breazy</Heading>
        <HStack spacing="3">
          <Img maxW="9" src="/images/bird-watching.png" />
          <Img maxW="9" src="/images/bird-watching.png" />
          <Img maxW="9" src="/images/bird-watching.png" />
        </HStack>
      </VStack> */}
    </Stack>
  );
};
