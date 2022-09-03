import { useState, useMemo, useCallback } from "react";
import { useCounter } from "usehooks-ts";

import {
  HStack,
  Img,
  Heading,
  Stack,
  VStack,
  useBoolean,
} from "@chakra-ui/react";

import { SelfCareButton } from "../../buttons/SelfCareButton";
import { ChallengeButton, Challenge } from "../../buttons/ChallengeButton";
import { RewardStoreButton } from "../../buttons/RewardStoreButton";
import { RewardStoreModal } from "../../modals/RewardStoreModal";

export const RewardCentre = () => {
  const [isRewardStoreModalsOpen, setIsRewardStoreModalsOpen] = useBoolean();

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

  const [challenges, setChallenges] = useState<Challenge[]>(() => [
    {
      index: 0,
      image: "/images/coffee-beans.png",
      label: "Coffee Free",
      duration: 30,
      completed: 0,
    },
    {
      index: 1,
      image: "/images/bud.png",
      label: "Weed Free",
      duration: 30,
      completed: 0,
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

  const onChallengeButtonClick = useCallback((index: number) => {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) => {
        if (challenge.index === index)
          ({ ...challenge, completed: challenge.completed + 1 });
        return challenge;
      })
    );
  }, []);

  return (
    <>
      <VStack
        bg="neutral.light"
        borderRadius="lg"
        w="200%"
        p="5"
        spacing="3"
        justify="space-between"
      >
        <Stack w="100%" justify="space-between" direction={["column", "row"]}>
          <HStack spacing="2">
            <Img maxW="7" src="/images/badge.png" />
            <Heading fontSize="2xl">Reward Centre</Heading>
          </HStack>

          {/* <HStack bg="neutral.main" p="2" borderRadius="md">
            <Img src="/images/money.png" maxW="6" />
            <Heading color="accent.main" fontSize="xl">
              {credits}
            </Heading>
          </HStack> */}

          <RewardStoreButton
            credits={credits}
            onClick={setIsRewardStoreModalsOpen.on}
          />
        </Stack>

        <HStack spacing="3" w="100%">
          {selfCareTasks.map((task) => (
            <SelfCareButton
              {...task}
              onSelfCareButtonClick={onSelfCareButtonClick}
            />
          ))}
        </HStack>

        <Stack direction="row" justify="space-between" w="100%" spacing="3">
          {challenges.map((challenge, index) => (
            <ChallengeButton
              challenge={challenge}
              index={index}
              onClick={onChallengeButtonClick}
            />
          ))}
        </Stack>
      </VStack>

      <RewardStoreModal
        rewards={rewards}
        credits={credits}
        isOpen={isRewardStoreModalsOpen}
        onClose={setIsRewardStoreModalsOpen.off}
      />
    </>
  );
};
