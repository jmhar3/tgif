import { HStack, Img, Heading, Button, VStack } from "@chakra-ui/react";

export type Challenge = {
  index: number;
  image: string;
  label: string;
  duration: number;
  completed: number;
};

export interface ChallengeButtonProps {
  challenge: Challenge;
  index: number;
  onClick: (index: number) => void;
}

export const ChallengeButton = (props: ChallengeButtonProps) => {
  const { challenge, index, onClick } = props;

  return (
    <Button
      p="3"
      px="5"
      h="100%"
      w="100%"
      borderRadius="md"
      bg="neutral.main"
      transition="all .3s"
      _hover={{ backgroundColor: "neutral.boldSheer" }}
      onClick={() => onClick(index)}
      key={index}
    >
      <HStack w="100%" spacing="5">
        <Img src={challenge.image} maxW="9" />
        <VStack spacing="0" align="flex-start">
          <Heading fontSize="lg">{challenge.label}</Heading>
          <Heading fontSize="lg">
            {challenge.completed}/{challenge.duration} days
          </Heading>
        </VStack>
      </HStack>
    </Button>
  );
};
