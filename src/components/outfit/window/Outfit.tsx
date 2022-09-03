import { useCallback } from "react";
import capitalize from "just-capitalize";

import { Box, Heading, HStack, VStack, Text, Img } from "@chakra-ui/react";

import { useWeather } from "../../../hooks/api/useWeather";
import { useWarnings } from "../../../hooks/useWarnings";
import { useOutfit } from "../../../hooks/useOutfit";
import { Warning } from "./Warning";
import dayjs from "dayjs";

export interface Props {
  isActive?: boolean;
}

export const Outfit = (props: Props) => {
  const { isActive = false } = props;

  const { warnings } = useWarnings();
  const { todaysForecast: forecast, weatherStats } = useWeather();
  const { outfitRecommendation } = useOutfit({ isActive });

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
        <HStack justify="space-between" w="100%">
         <VStack spacing="1" align="flex-start">
          <Heading fontSize="xl">
            {dayjs().format("dddd h:mmA")}
          </Heading>
          <Heading fontSize="xl" fontWeight="semibold">
            {forecast[0] && capitalize(forecast[0].weather[0].description)}
          </Heading>
         </VStack>
          <HStack>
            {outfitRecommendation.accessory && (
              <Img maxW="12" src={outfitRecommendation.accessory} />
            )}
            {outfitRecommendation.top && (
              <Img maxW="12" src={outfitRecommendation.top} />
            )}
            {outfitRecommendation.bottoms && (
              <Img maxW="12" src={outfitRecommendation.bottoms} />
            )}
          </HStack>
        </HStack>

        <HStack
          justify="space-between"
          bg="neutral.main"
          borderRadius="lg"
          h="1"
          w="100%"
        />

        <HStack w="100%" justify="space-around">
          {forecast.map((report) => {
            const timeBlock: string = timeOfDay(report.dt_txt);
            return (
              <VStack spacing="1">
                <Img
                  maxW="9"
                  src={weatherIcon(report.weather[0].main, timeBlock)}
                />
                <VStack spacing="0">
                  <Text fontSize="sm">{timeBlock}</Text>
                  <Heading fontSize="xl">
                    {Math.round(report.main.feels_like)}°
                  </Heading>
                </VStack>
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
