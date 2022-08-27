import { useMemo } from "react";
import { Stack, VStack, HStack, Heading, Img } from "@chakra-ui/react";

export const Activities = () => {
  const activities = useMemo(() => {}, []);
  return (
    <Stack w="100%">
      <Stack w="100%" direction={["column", "row"]}>
        <VStack bg="neutral.bold" borderRadius="lg" align="flex-start" justify="flex-end" w="100%" p="5" pt="12" spacing="3">
          <Heading fontSize="md">Warm and breazy</Heading>
          <HStack spacing="3">
            <Img
              maxW="9"
              src="/images/bird-watching.png"
            />
            <Img maxW="9" src="/images/bird-watching.png" />
            <Img maxW="9" src="/images/bird-watching.png" />
          </HStack>
        </VStack>

        <VStack bg="neutral.bold" borderRadius="lg" align="flex-start" justify="flex-end" w="100%" p="5" pt="12" spacing="3">
          <Heading fontSize="md">Warm and breazy</Heading>
          <HStack spacing="3">
            <Img maxW="9" src="/images/bird-watching.png" />
            <Img maxW="9" src="/images/bird-watching.png" />
            <Img maxW="9" src="/images/bird-watching.png" />
          </HStack>
        </VStack>

        <VStack bg="neutral.bold" borderRadius="lg" align="flex-start" justify="flex-end" w="100%" p="5" pt="12" spacing="3">
          <Heading fontSize="md">Warm and breazy</Heading>
          <HStack spacing="3">
            <Img maxW="9" src="/images/bird-watching.png" />
            <Img maxW="9" src="/images/bird-watching.png" />
            <Img maxW="9" src="/images/bird-watching.png" />
          </HStack>
        </VStack>
      </Stack>
    </Stack>
  );
};
