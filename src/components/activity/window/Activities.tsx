import { useMemo } from "react";
import { Stack, VStack, HStack, Heading, Img, Box } from "@chakra-ui/react";

import { ActivityHighlight } from "./ActivityHighlight";
import { StickerChart } from "./RewardChart";
import { ActivityButton } from "../../buttons/ActivityButton";

export const Activities = () => {
  const activities = [
    {
      title: "Tone and limber",
      icons: [
        "/images/pilates.png",
        "/images/yoga.png",
        "/images/yoga-pose.png",
      ],
    },
    {
      title: "Get Inspired",
      icons: [
        "/images/history-book.png",
        "/images/book-shop.png",
        "/images/romance.png",
      ],
    },
    {
      title: "Green Thumbelina",
      icons: [
        "/images/gardening.png",
        "/images/gardening2.png",
        "/images/gardening3.png",
      ],
    },
    {
      title: "Deep soak",
      icons: [
        "/images/whirlpool.png",
        "/images/towel.png",
        "/images/woman.png",
      ],
    },
  ];
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
