import { useMemo } from "react";
import {
  Stack,
  VStack,
  HStack,
  Heading,
  Img,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

export const ActivityHighlight = () => {
  return (
    <VStack borderRadius="lg" overflow="hidden" w="100%" spacing="0">
      <Flex
        p="3"
        align="flex-start"
        justify="flex-end"
        bg="url(/images/gardens.jpg) center/cover no-repeat"
        w="100%"
        minH="180px"
      >
        <Img src="/images/reload.png" maxW="9" pb="12" />
      </Flex>
      <VStack p="3" bg="neutral.light" textAlign="center" h="100%">
        <Heading fontSize="md">
          It's the perfect day to soak up some sun
        </Heading>
        <Text>Go for a stroll and find somewhere nice to read</Text>
        <Button bg="neutral.boldSheer" color="accent.main" w="100%">
          Tell me more
        </Button>
      </VStack>
    </VStack>
  );
};
