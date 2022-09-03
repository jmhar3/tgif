import { VStack, HStack, Heading } from "@chakra-ui/react";

import { DefaultLayout } from "../components/layout/DefaultLayout";
import { Outfit } from "../components/outfit/window/Outfit";
import { Activities } from "../components/activity/window/Activities";

import { useWeather } from "../hooks/api/useWeather";

function Home() {
  const { todaysForecast } = useWeather();

  const username = "titfairy";

  return (
    <DefaultLayout>
      <>
        {todaysForecast.length > 0 && (
          <HStack width="100%">
            <VStack
              justify="flex-start"
              align="flex-start"
              padding="20px"
              width="100%"
              minH="100vh"
              spacing="5"
            >
              <Heading size="lg">Howdy {username}</Heading>
              <Activities />
            </VStack>
            <Outfit />
          </HStack>
        )}
      </>
    </DefaultLayout>
  );
}

export default Home;
