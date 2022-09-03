import { useMemo, useCallback } from "react";

import { VStack, HStack, Heading } from "@chakra-ui/react";

import { DefaultLayout } from "../components/layout/DefaultLayout";
import { Outfit } from "../components/outfit/window/Outfit";
import { Activities } from "../components/activity/window/Activities";

import { useWeather } from "../hooks/api/useWeather";

export type WeatherStats = {
  isCold: boolean;
  isWindy: boolean;
  isHumid: boolean;
  isRainy: boolean;
  light: string;
};

function Home() {
  const { todaysForecast, isDay } = useWeather();

  const weatherStats = useMemo<WeatherStats>(() => {
    const forecast = todaysForecast[0];

    const downpour = () => {
      const desc = forecast?.weather[0].main;
      return (
        desc === "Rain" ||
        desc === "Hail" ||
        desc === "Thunderstorm" ||
        desc === "snow"
      );
    };

    const light = () => {
      if (!isDay) {
        return "low";
      } else if (forecast.weather[0].main === "clear") {
        return "high";
      } else {
        return "medium";
      }
    };

    return {
      isCold: forecast?.main.feels_like <= 14,
      isWindy: forecast?.wind.speed > 20,
      isHumid: forecast?.main.humidity <= 65,
      isRainy: downpour(),
      light: forecast && light(),
    };
  }, [isDay, todaysForecast]);

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
            <Outfit weatherStats={weatherStats} />
          </HStack>
        )}
      </>
    </DefaultLayout>
  );
}

export default Home;
