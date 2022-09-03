import { useMemo, useCallback } from "react";
import dayjs from "dayjs";

import { VStack, HStack, Heading } from "@chakra-ui/react";

import { DefaultLayout } from "../components/layout/DefaultLayout";
import { Outfit } from "../components/outfit/window/Outfit";
import { Activities } from "../components/activity/window/Activities";

import { useWeather } from "../hooks/api/useWeather";

export type WeatherStats = {
  isCold: boolean;
  isWindy: boolean;
  isHumid: boolean;
  rain: string;
  light: string;
};

function Home() {
  const { weatherForecast, isDay } = useWeather();

  const currentDateTime = useMemo(() => {
    const dateTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const date = dateTime.slice(0, 11);
    const time = +dateTime.slice(11, 13);
    const currentTime = () => {
      if (time < 3) {
        return "00:00:00";
      } else if (time < 6) {
        return "03:00:00";
      } else if (time < 9) {
        return "06:00:00";
      } else if (time < 12) {
        return "09:00:00";
      } else if (time < 15) {
        return "12:00:00";
      } else if (time < 18) {
        return "15:00:00";
      } else if (time < 21) {
        return "18:00:00";
      } else {
        return "21:00:00";
      }
    };
    return `${date}${currentTime()}`;
  }, []);

  const todaysForecast = useMemo(() => {
    if (weatherForecast) {
      const currentIndex = weatherForecast.list.findIndex((report) => {
        return report.dt_txt === currentDateTime;
      });

      return weatherForecast.list.slice(currentIndex, currentIndex + 4);
    } else {
      return [];
    }
  }, [weatherForecast, currentDateTime]);

  const weatherStats = useMemo<WeatherStats>(() => {
    const forecast = todaysForecast[0];

    const rain = () => {
      if (forecast.main.feels_like <= 2) {
        return "light rain";
      } else if (forecast.main.feels_like <= 8) {
        return "rain";
      } else {
        return "heavy rain";
      }
    };

    const light = () => {
      if (!isDay) {
        return "shade";
      } else if (forecast.weather[0].main === "clear") {
        return "sunny";
      } else {
        return "cloudy";
      }
    };

    return {
      isCold: forecast.main.feels_like <= 18,
      isWindy: forecast.wind.speed > 20,
      isHumid: forecast.main.humidity <= 65,
      rain: rain(),
      light: light(),
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
            <Outfit forecast={todaysForecast} weatherStats={weatherStats} />
          </HStack>
        )}
      </>
    </DefaultLayout>
  );
}

export default Home;
