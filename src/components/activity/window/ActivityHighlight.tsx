import { useCallback } from "react";
import {
  VStack,
  Heading,
  Img,
  Text,
  Button,
  Flex,
  useBoolean,
  HStack,
} from "@chakra-ui/react";
import {
  ActivityInfoModal,
  ActivityData,
} from "../../modals/ActivityInfoModal";

export const ActivityHighlight = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useBoolean();

  const activity = {
    image: "/images/gardens.jpg",
    title: "Soak up some sun",
    blurb: "Go for a stroll and find somewhere nice to read",
    icons: [
      "/images/sun.png",
      "/images/walking-the-dog.png",
      "/images/open-book.png",
    ],
  };

  return (
    <>
      <VStack borderRadius="lg" overflow="hidden" w="120%" spacing="0">
        <VStack
          p="3"
          align="flex-end"
          justify="flex-start"
          bg={`url(${activity.image}) center/cover no-repeat`}
          w="100%"
          minH="150px"
        >
          <Img src="/images/reload.png" maxW="9" />
        </VStack>
        <VStack p="3" bg="neutral.light" textAlign="center" h="100%">
          <HStack justify="center" w="100%">
            {activity.icons.map((icon) => (
              <Img src={icon} maxW="12" />
            ))}
          </HStack>
          <Text>{activity.blurb}</Text>
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
