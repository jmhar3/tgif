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

export interface RewardStoreModalProps {
  rewards: Reward[];
  credits: number;
  isOpen: boolean;
  onClose: () => void
}

export const RewardStoreModal = (props: RewardStoreModalProps) => {
  const { rewards, credits, isOpen, onClose } = props;

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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="neutral.main">
        <ModalHeader>
          <HStack justify="space-between">
            <HStack>
              <Img maxW="6" src="/images/reward.png" />
              <Heading fontSize="2xl">Reward Store</Heading>
            </HStack>
            <IconButton
              onClick={() => {
                console.log(sortedRewards);
                sortRewards();
              }}
              bg="none"
              aria-label="sort"
              icon={<Img maxW="9" src="/images/sort.png" />}
            />
          </HStack>
        </ModalHeader>

        <ModalBody>
          <VStack>
            {sortedRewards.map((reward) => (
              <Button
                p="2"
                px="3"
                w="100%"
                bg="neutral.light"
                transition="all .3s"
                _hover={{ backgroundColor: "neutral.boldSheer" }}
              >
                <HStack w="100%" borderRadius="md" justify="space-between">
                  <Heading size="md">{reward.label}</Heading>
                  <Heading
                    color={
                      credits >= reward.value ? "accent.main" : "accent.bold"
                    }
                    opacity="0.7"
                    size="md"
                  >
                    {reward.value}
                  </Heading>
                </HStack>
              </Button>
            ))}
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Flex w="100%" justify="center">
            <Button
              onClick={onClose}
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
  );
};
