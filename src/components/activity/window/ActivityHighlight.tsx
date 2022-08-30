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
  const [isMouseOver, setIsMouseOver] = useBoolean();

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
      <VStack
        onClick={setIsInfoModalOpen.on}
        borderRadius="lg"
        overflow="hidden"
        w="120%"
        spacing="0"
        onMouseEnter={setIsMouseOver.on}
        onMouseLeave={setIsMouseOver.off}
      >
        <Img
          opacity={isMouseOver ? 0.8 : 1}
          transition="all .1s"
          src={activity.image}
          w="100%"
          objectFit="cover"
          no-repeat
        />
        <VStack
          p="3"
          textAlign="center"
          bg={isMouseOver ? "neutral.sheer" : "neutral.light"}
          transition="all .1s"
        >
          <HStack justify="center" w="100%">
            {activity.icons.map((icon) => (
              <Img src={icon} maxW="12" />
            ))}
          </HStack>
          <Text>{activity.blurb}</Text>
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
