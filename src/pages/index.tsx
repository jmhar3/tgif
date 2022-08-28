import { useMemo, useCallback } from "react";
import dayjs from "dayjs";

import { VStack, HStack, Heading } from "@chakra-ui/react";

import { DefaultLayout } from "../public/components/layout/DefaultLayout";
import { Outfit } from "../public/components/Outfit";
import { Activities } from "../public/components/Activities";

import { useWeather } from "../public/hooks/api/useWeather";

function Home() {
  const { currentWeather, weatherForecast } = useWeather();

  console.log("currentWeather", currentWeather);
  console.log("weatherForecast", weatherForecast);

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

  const username = "titfairy"

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
            <Outfit forecast={todaysForecast} />
          </HStack>
        )}
      </>
    </DefaultLayout>
  );
}

export default Home;
