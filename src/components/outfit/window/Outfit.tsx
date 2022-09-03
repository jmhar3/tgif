import { useCallback } from "react";
import capitalize from "just-capitalize";

import { Box, Heading, HStack, VStack, Text, Img } from "@chakra-ui/react";

import { Forecast } from "../../../hooks/api/useWeather";
import { useWarnings } from "../../../hooks/useWarnings";
import { useOutfit } from "../../../hooks/useOutfit";
import { Warning } from "./Warning";
import { WeatherStats } from "../../../pages/index";

export interface Props {
  forecast: Forecast[];
  weatherStats: WeatherStats;
  isActive?: boolean;
}

export const Outfit = (props: Props) => {
  const { forecast, weatherStats, isActive = false } = props;

  const { warnings } = useWarnings(forecast);
  const { outfitRecommendation } = useOutfit({ weatherStats, isActive });

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
      default:
        return "";
    }
  }, []);

  const weatherIcon = useCallback((weather: string, timeBlock: string) => {
    const isTimeDay =
      ["dawn", "morning", "noon", "afternoon"].indexOf(timeBlock) >= 0 && true;

    switch (weather) {
      case "Clouds":
        return "/images/clouds.png";
      case "Thunderstorm":
        return "/images/thunderstorm.png";
      case "Drizzle":
        return "/images/drizzle.png";
      case "Snow":
        return "/images/snow.png";
      case "Atmosphere":
        return "/images/fog.png";
      case "Rain":
        return "/images/heavy.png";
      case "Hail":
        return "/images/hail.png";
      case "Clear":
        return isTimeDay ? "/images/sun2.png" : "/images/night.png";
      default:
        return undefined;
    }
  }, []);

  return (
    <Box minH="100vh" w="45%" padding="30px" backgroundColor="neutral.light">
      <VStack gap="3" align="flex-start" pb="3">
        <HStack
          w="100%"
          justify="space-between"
          bg="neutral.main"
          p="3"
          borderRadius="lg"
        >
          <Heading fontSize="xl">
            {capitalize(forecast[0].weather[0].description)}
          </Heading>
          <HStack>
            {outfitRecommendation.accessory && (
              <Img maxW="9" src={outfitRecommendation.accessory} />
            )}
            {outfitRecommendation.top && (
              <Img maxW="9" src={outfitRecommendation.top} />
            )}
            {outfitRecommendation.bottoms && (
              <Img maxW="9" src={outfitRecommendation.bottoms} />
            )}
          </HStack>
        </HStack>

        <HStack gap="3" w="100%" justify="space-between">
          {forecast.map((report) => {
            const timeBlock: string = timeOfDay(report.dt_txt);
            return (
              <VStack>
                <Img
                  maxW="12"
                  src={weatherIcon(report.weather[0].main, timeBlock)}
                />
                <Text>{timeBlock}</Text>
                <Heading size="lg">
                  {Math.round(report.main.feels_like)}°
                </Heading>
              </VStack>
            );
          })}
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
