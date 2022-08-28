import { useState } from "react";
import { VStack, Img, Heading, Button } from "@chakra-ui/react";

export interface ButtonProps {
  label: string;
  image: string;
  isComplete: boolean;
  index: number;
  onSelfCareButtonClick: (index: number) => void;
}

export const SelfCareButton = (props: ButtonProps) => {
  const { label, image, isComplete, index, onSelfCareButtonClick } = props;

  return (
    <Button
      key={index}
      w="100%"
      bg="neutral.main"
      transition="all .3s"
      _hover={{ backgroundColor: "neutral.boldSheer" }}
      onClick={() => onSelfCareButtonClick(index)}
      borderRadius="md"
      py="6"
      h="fit-content"
    >
      <VStack>
        <Img maxW="12" src={isComplete ? "/images/star.png" : image} />
        <Heading fontSize="lg">{isComplete ? "Complete" : label}</Heading>
      </VStack>
    </Button>
  );
};
