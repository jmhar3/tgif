import { useState } from "react";

import {
  HStack,
  Img,
  Box,
  Heading,
  Stack,
  VStack,
  Button,
} from "@chakra-ui/react";

export const StickerChart = () => {
  const [tally, setTally] = useState({ total: 30, completed: 9 });

  return (
    <VStack
      bg="neutral.light"
      borderRadius="lg"
      w="200%"
      p="5"
      justify="space-between"
    >
      <Stack w="100%" spacing="3">
        <Stack w="100%" justify="space-between" direction={["column", "row"]}>
          <HStack>
            <Img maxW="9" src="/images/star.png" />
            <Heading fontSize="xl">Reward Centre</Heading>
          </HStack>

          <HStack>
            <Img src="/images/reward.png" maxW="6" />
            <Heading fontSize="xl">Hunt A Killer</Heading>
          </HStack>
        </Stack>

        <HStack>
          <VStack w="100%" justify="flex-start">
            <Img maxW="9" src="/images/star.png" />
            <Heading fontSize="lg">Exercise</Heading>
          </VStack>

          <VStack w="100%" justify="flex-start">
            <Img maxW="9" src="/images/star.png" />
            <Heading fontSize="lg">Meditate</Heading>
          </VStack>

          <VStack w="100%" justify="flex-start">
            <Img maxW="9" src="/images/star.png" />
            <Heading fontSize="lg">Healthy Eating</Heading>
          </VStack>
        </HStack>
      </Stack>

      <Stack w="100%" justify="space-between" direction={["column", "row"]}>
        <Button py="7" px="3" leftIcon={<Img maxW="9" src="/images/badge.png" />}>
          <Heading fontSize="xl">Earn a credit</Heading>
        </Button>
        <HStack>
          <Img src="/images/reward.png" maxW="6" />
          <Heading fontSize="xl">Hunt A Killer: 30c</Heading>
        </HStack>
      </Stack>
    </VStack>
  );
};
