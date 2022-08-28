import React from "react";
import { VStack, Img, Heading } from "@chakra-ui/react";

export interface ButtonProps {
  label: string;
  image: string;
}

export const SelfCareButton = (props: ButtonProps) => {
  const { label, image } = props;

  return (
    <VStack w="100%" justify="flex-start">
      <Img maxW="9" src={image} />
      <Heading fontSize="lg">{label}</Heading>
    </VStack>
  );
};
