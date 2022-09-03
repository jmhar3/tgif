import { VStack, HStack, Heading, Img, useToken } from "@chakra-ui/react";

export interface ActivityButtonProps {
  title: string;
  icons: string[];
}

export const ActivityButton = (props: ActivityButtonProps) => {
  const { title, icons } = props;

  return (
    <VStack
      w="100%"
      _hover={{bg: "neutral.sheer"}}
      bg="neutral.light"
      borderRadius="lg"
      align="center"
      p="5"
      spacing="3"
    >
      <Heading fontSize="md">{title}</Heading>
      <HStack spacing="3">
        {icons.map((icon) => (
          <Img maxW="9" src={icon} />
        ))}
      </HStack>
    </VStack>
  );
};
