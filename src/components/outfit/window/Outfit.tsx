import { useCallback, useMemo } from "react";

import { Box, Heading, HStack, VStack, Text, Img } from "@chakra-ui/react";

import { Forecast, useWeather } from "../../../hooks/api/useWeather";
import { useWarnings } from "../../../hooks/useWarnings";

import { Warning } from "./Warning";
import { useEffect } from "react";

export interface Props {
  forecast: Forecast[];
}

export const Outfit = (props: Props) => {
  const { forecast } = props;

  const { isDay, sunrise, sunset } = useWeather();

  const { warnings } = useWarnings(forecast);

  const timeOfDay = useCallback((dateTime: string) => {
    const time = dateTime.slice(11);
    switch (time) {
      case "00:00:00":
        return "midnight";
      case "03:00:00":
        return "night";
      case "06:00:00":
        return "dawn";
      case "09:00:00":
        return "morning";
      case "12:00:00":
        return "noon";
      case "15:00:00":
        return "afternoon";
      case "18:00:00":
        return "dusk";
      case "21:00:00":
        return "evening";
    }
  }, []);
  
 //  const dayLightHours = useMemo(() => {
 //   const unixify = (n1: number, n2: number, n3: number, n4: number) =>
 //     new Date().setUTCHours(n1, n2, n3, n4);

 //   const timeBlocks = [
 //     ["midnight", unixify(0o0, 0o0, 0o0, 0o0)],
 //     ["night", unixify(0o3, 0o0, 0o0, 0o0)],
 //     ["dawn", unixify(0o6, 0o0, 0o0, 0o0)],
 //     ["morning", unixify(0o11, 0o0, 0o0, 0o0)],
 //     ["noon", unixify(12, 0o0, 0o0, 0o0)],
 //     ["afternoon", unixify(15, 0o0, 0o0, 0o0)],
 //     ["dusk", unixify(18, 0o0, 0o0, 0o0)],
 //     ["evening", unixify(21, 0o0, 0o0, 0o0)],
 //   ];

 //   const isSunrise = sunrise && timeBlocks.reduce((prev, curr) => {
 //    const [label, time] = curr
 //    const [prevLabel, prevTime] = prev
 //     return Math.abs(isNaN(time) ? parseInt(time) : time - sunrise) < Math.abs(prev[1] - sunrise) ? curr : prev;
 //   });
   
 //   const isSunset = sunset && timeBlocks.reduce((prev, curr) => {
 //    return Math.abs(curr - sunset) < Math.abs(prev - sunset) ? curr : prev;
 //  });
 // }, []);

  const weatherIcon = useCallback((weather: string) => {
    switch (weather) {
      case "Clouds":
        return "/images/clouds.png";
      case "Rain":
        return "/images/heavy.png";
      case "Hail":
        return "/images/hail.png";
      case "Clear":
        return isDay ? "/images/sun2.png" : "/images/night.png";
      default:
        return undefined;
    }
  }, []);

  console.log(forecast);

  return (
    <Box minH="100vh" w="45%" padding="30px" backgroundColor="neutral.light">
      <VStack gap="3" align="flex-start" pb="3">
        {/* {forecast[0].weather && (
          <Heading size="lg">{forecast[0].weather[0].description}</Heading>
        )} */}

        <HStack gap="3" w="100%" justify="space-between">
          {forecast.map((report) => (
            <VStack>
              <Img maxW="12" src={weatherIcon(report.weather[0].main)} />
              <Text>{timeOfDay(report.dt_txt)}</Text>
              <Heading size="lg">{Math.round(report.main.feels_like)}°</Heading>
            </VStack>
          ))}
        </HStack>
      </VStack>
      <VStack gap="3">
        {warnings.map((warning) => (
          <Warning warning={warning} />
        ))}
      </VStack>
    </Box>
  );
};
