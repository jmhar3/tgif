import { useMemo } from "react";
import {
  VStack,
  Heading,
  Img,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

export const ActivityHighlight = () => {
  return (
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
        <Heading fontSize="lg">
          Soak up some sun
        </Heading>
        <Text>Go for a stroll and find somewhere nice to read</Text>
        <Button
          backgroundColor="neutral.boldSheer"
          transition="all .3s"
          _hover={{ backgroundColor: "neutral.main" }}
          color="accent.main"
          w="100%"
        >
          Tell me more
        </Button>
      </VStack>
    </VStack>
  );
};
