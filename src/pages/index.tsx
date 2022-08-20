import dayjs from "dayjs";

import { VStack, HStack, Heading } from "@chakra-ui/react";

import { DefaultLayout } from "../public/components/layout/DefaultLayout";
import { Outfit } from "../public/components/Outfit";
import { Activities } from "../public/components/Activities";
import { Warning } from "../public/components/Warning";
import { Upcoming } from "../public/components/Upcoming";
import { Evening } from "../public/components/Evening";

import { useWeather } from "../public/hooks/api/useWeather";
import { useMemo } from "react";

function Home() {
  const warnings = false;

  const { currentWeather, weatherForecast } = useWeather();

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
      <VStack>
        <Heading>{title}</Heading>
        <HStack>
          <Outfit />
          <Activities />
        </HStack>
        <HStack>
          {<Evening width={warnings ? "100%" : "200%"} />}
          {warnings && <Warning />}
          <Upcoming />
        </HStack>
      </VStack>
    </DefaultLayout>
  );
};

export default Home