import { Button, Heading, Img, HStack } from "@chakra-ui/react";

export interface RewardStoreButtonProps {
  onClick: () => void;
  credits: number;
}

export const RewardStoreButton = (props: RewardStoreButtonProps) => {
  const { onClick, credits } = props;

  return (
    <HStack>
      <Button
        bg="neutral.main"
        transition="all .3s"
        _hover={{ bg: "neutral.boldSheer" }}
        borderRadius="lg"
        onClick={onClick}
      >
        <Heading fontSize="xl">Store</Heading>
      </Button>

      <HStack bg="neutral.boldSheer" borderRadius="lg" p="2">
        <Img src="/images/money.png" maxW="5" pt="1" />
        <Heading fontSize="xl">{credits}</Heading>
      </HStack>
    </HStack>
  );
};
