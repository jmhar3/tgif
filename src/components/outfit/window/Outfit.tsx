import { useCallback } from "react";

import { Box, Heading, HStack, VStack, Text, Img } from "@chakra-ui/react";

import { Forecast } from "../../../hooks/api/useWeather";
import { useWarnings } from "../../../hooks/useWarnings";

import { Warning } from "./Warning";

export interface Props {
  forecast: Forecast[];
}

export const Outfit = (props: Props) => {
  const { forecast } = props;

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

  const weatherIcon = useCallback((weather: string) => {
    switch (weather) {
      case "Clouds":
        return "/images/clouds.png";
      case "Rain":
        return "/images/heavy.png";
      case "Hail":
        return "/images/hail.png";
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
