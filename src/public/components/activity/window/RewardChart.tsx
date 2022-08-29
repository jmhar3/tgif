import { useState, useMemo } from "react";
import { useCounter } from "usehooks-ts";

import { HStack, Img, Heading, Stack, VStack } from "@chakra-ui/react";

import { SelfCareButton } from "../../buttons/SelfCareButton";
import { RewardStoreModal } from "../../modals/RewardStoreModal";
import { useCallback } from "react";

export const StickerChart = () => {
  const { count: credits, increment, decrement } = useCounter(0);

  const [selfCareTasks, setSelfCareTasks] = useState([
    {
      index: 0,
      label: "Exercise",
      image: "/images/sport.png",
      isComplete: false,
    },
    {
      index: 1,
      label: "Meditate",
      image: "/images/meditation.png",
      isComplete: false,
    },
    {
      index: 2,
      label: "Eat Healthy",
      image: "/images/vegetables.png",
      isComplete: false,
    },
  ]);

  const rewards = useMemo(
    () => [
      { label: "Hunt A Killer", value: 30 },
      { label: "Record Player", value: 90 },
      { label: "23andMe", value: 45 },
      { label: "Projector", value: 120 },
    ],
    []
  );

  const onSelfCareButtonClick = useCallback(
    (index: number) => {
      setSelfCareTasks((prevState) =>
        prevState.map((prevTask) => {
          if (prevTask.index === index) {
            !prevTask.isComplete ? increment() : decrement();
            return { ...prevTask, isComplete: !prevTask.isComplete };
          } else {
            return prevTask;
          }
        })
      );
    },
    [setSelfCareTasks]
  );

  return (
    <VStack
      bg="neutral.light"
      borderRadius="lg"
      w="200%"
      p="5"
      justify="space-between"
    >
      <Stack w="100%" spacing="5">
        <Stack w="100%" justify="space-between" direction={["column", "row"]}>
          <HStack gap="1">
            <Img maxW="9" src="/images/badge.png" />
            <Heading fontSize="2xl">Reward Centre</Heading>
          </HStack>

          <HStack bg="neutral.main" p="2" borderRadius="md">
            <Img src="/images/money.png" maxW="6" />
            <Heading color="accent.main" fontSize="xl">
              {credits}
            </Heading>
          </HStack>
        </Stack>

        <HStack gap="3">
          {selfCareTasks.map((task) => (
            <SelfCareButton
              {...task}
              onSelfCareButtonClick={onSelfCareButtonClick}
            />
          ))}
        </HStack>
      </Stack>

      <RewardStoreModal rewards={rewards} credits={credits} />
    </VStack>
  );
};
