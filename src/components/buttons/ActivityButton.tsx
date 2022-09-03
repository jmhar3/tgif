import { VStack, HStack, Heading, Img, Button } from "@chakra-ui/react";

export interface ActivityButtonProps {
  index: number;
  title: string;
  icons: string[];
  onClick: (index: number) => void;
}

export const ActivityButton = (props: ActivityButtonProps) => {
  const { title, icons, index, onClick } = props;

  return (
    <Button
      w="100%"
      h="100%"
      p="3"
      borderRadius="lg"
      _hover={{ bg: "neutral.sheer" }}
      bg="neutral.light"
      onClick={() => onClick(index)}
    >
      <VStack align="center" spacing="3">
        <Heading fontSize="md">{title}</Heading>
        <HStack spacing="3">
          {icons.map((icon) => (
            <Img maxW="9" src={icon} />
          ))}
        </HStack>
      </VStack>
    </Button>
  );
};
