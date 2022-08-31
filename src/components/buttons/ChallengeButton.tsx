import { useState, useMemo } from "react";

import { HStack, Img, Heading, Stack, VStack } from "@chakra-ui/react";

export type Challenge = {
  index: number;
  image: string;
  label: string;
  duration: number;
  completed: number;
};

export interface ChallengeButtonProps {
  challenge: Challenge;
}

export const ChallengeButton = (props: ChallengeButtonProps) => {
  const { challenge } = props;

  return (
    <HStack w="100%" bg="neutral.main" borderRadius="md" p="3" px="5" spacing="5">
      <Img src={challenge.image} maxW="12" />
      <VStack spacing="0" align="flex-start">
        <Heading fontSize="xl">{challenge.label}</Heading>
        <Heading fontSize="xl">
          {challenge.completed}/{challenge.duration} days
        </Heading>
      </VStack>
    </HStack>
  );
};
