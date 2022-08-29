import { useCallback } from "react";
import {
  VStack,
  Heading,
  Img,
  Text,
  Button,
  Flex,
  useBoolean,
} from "@chakra-ui/react";
import { ActivityInfoModal } from "../../modals/ActivityInfoModal";

export const ActivityHighlight = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useBoolean();

  const activity = {
    image: "/images/gardens.jpg",
    heading: "Soak up some sun",
    text: "Go for a stroll and find somewhere nice to read",
  };

  return (
    <>
      <VStack borderRadius="lg" overflow="hidden" w="120%" spacing="0">
        <Flex
          p="3"
          align="flex-start"
          justify="flex-end"
          bg="url(/images/gardens.jpg) center/cover no-repeat"
          w="100%"
          minH="150px"
        >
          <Img src="/images/reload.png" maxW="9" pb="12" />
        </Flex>
        <VStack p="3" bg="neutral.light" textAlign="center" h="100%">
          <Heading fontSize="lg">{activity.heading}</Heading>
          <Text>{activity.text}</Text>
          <Button
            backgroundColor="neutral.boldSheer"
            transition="all .3s"
            _hover={{ backgroundColor: "neutral.main" }}
            onClick={setIsInfoModalOpen.on}
            color="accent.main"
            w="100%"
          >
            Tell me more
          </Button>
        </VStack>
      </VStack>

      <ActivityInfoModal
        isOpen={isInfoModalOpen}
        onClose={setIsInfoModalOpen.off}
        activity={activity}
      />
    </>
  );
};
