import { useState, useCallback } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Heading,
  Img,
  useBoolean,
  HStack,
  VStack,
  Flex,
  IconButton,
} from "@chakra-ui/react";

export interface Reward {
  label: string;
  value: number;
}

export interface RewardStoreProps {
  rewards: Reward[];
  credits: number
}

export const RewardStore = (props: RewardStoreProps) => {
  const { rewards, credits } = props;

  const [isOpen, setIsOpen] = useBoolean();

  const [sortedRewards, setSortedRewards] = useState<Reward[]>(rewards);

  const sortRewards = useCallback(() => {
    const lowToHigh = rewards.sort((a, b) => {
      return a.value - b.value;
    });
    const highToLow = rewards.sort((a, b) => {
      return a.value - b.value;
    });
    if (sortedRewards === rewards) {
      setSortedRewards(lowToHigh);
    } else if (sortedRewards === lowToHigh) {
      setSortedRewards(highToLow);
    } else if (sortedRewards === highToLow) {
      return rewards;
    }
  }, [rewards, sortedRewards, setSortedRewards]);

  return (
    <>
      <Button
        onClick={setIsOpen.on}
        px="3"
        backgroundColor="neutral.boldSheer"
        transition="all .3s"
        _hover={{ backgroundColor: "neutral.main" }}
        leftIcon={<Img maxW="6" src="/images/reward.png" />}
      >
        <Heading fontSize="xl">Reward Store</Heading>
      </Button>

      <Modal isOpen={isOpen} onClose={setIsOpen.off}>
        <ModalOverlay />
        <ModalContent bg="neutral.main">
          <ModalHeader>
            <HStack justify="space-between">
              <HStack>
                <Img maxW="9" src="/images/reward.png" />
                <Heading fontSize="2xl">Reward Store</Heading>
              </HStack>
              <IconButton
                onClick={sortRewards}
                bg="none"
                aria-label="sort"
                icon={<Img maxW="9" src="/images/sort.png" />}
              />
            </HStack>
          </ModalHeader>

          <ModalBody>
            <VStack>
              {sortedRewards.map((reward) => (
                <HStack
                  p="2"
                  px="3"
                  w="100%"
                  borderRadius="md"
                  justify="space-between"
                  bg="neutral.light"
                >
                  <Heading size="md">{reward.label}</Heading>
                  <Heading color={credits >= reward.value ? "accent.main" : "accent.bold"} opacity="0.7" size="md">
                    {reward.value}
                  </Heading>
                </HStack>
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Flex w="100%" justify="center">
              <Button
                onClick={setIsOpen.off}
                px="3"
                backgroundColor="neutral.boldSheer"
                transition="all .3s"
                _hover={{ backgroundColor: "neutral.light" }}
                leftIcon={<Img maxW="6" src="/images/star.png" />}
              >
                <Heading fontSize="xl">Earn more credits</Heading>
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
