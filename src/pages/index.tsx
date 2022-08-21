import dayjs from "dayjs";

import { VStack, HStack, Heading } from "@chakra-ui/react";

import { DefaultLayout } from "../public/components/layout/DefaultLayout";
import { Outfit } from "../public/components/Outfit";
import { Activities } from "../public/components/Activities";

import { useWeather } from "../public/hooks/api/useWeather";
import { useMemo } from "react";

function Home() {
  const warnings = false;

  const { currentWeather, weatherForecast } = useWeather();

 
  console.log("currentWeather", currentWeather)
  console.log("weatherForecast", weatherForecast)

  const title = useMemo(() => {
    if (weatherForecast) {
      const greeting = dayjs().format("a") === "am" ? "Morning" : "Afternoon";
      return `Good ${greeting}, ${weatherForecast.city.name}`;
    } else {
      return "Howdy Partner";
    }
  }, [weatherForecast]);

  return (
    <DefaultLayout>
      <HStack width="100%">
        <VStack justify="flex-start" align="flex-start" padding="20px" width="100%" minH="100vh">
          <Heading size="lg">{title}</Heading>
          <Activities />
        </VStack>
        <Outfit />
      </HStack>
    </DefaultLayout>
  );
}

export default Home;
