import { useEffect, useState, useCallback } from "react";
import { Forecast } from "./api/useWeather";
import { useWeather } from "./api/useWeather";

export interface WarningData {
  colourTheme: string;
  heading: string;
  text: string;
  icon: string;
}

export const useWarnings = (forecast?: Forecast[]) => {
  const { isDay } = useWeather();

  const noDataWarning = {
    colourTheme: "white",
    heading: "There's no data available",
    text: "Go stand outside and collect the data yourself",
    icon: "/images/clouds.png",
  };

  const [warnings, setWarnings] = useState<WarningData[]>([noDataWarning]);

  const fetchWarnings = useCallback(() => {
    if (forecast) {
      const highlights = [
        ...new Set(forecast.map((report) => report.weather[0].main)),
      ].filter(Boolean);

      highlights.forEach((highlight) => {
        highlight === "Clouds" &&
          setWarnings((prevWarnings) => [
            ...prevWarnings,
            {
              colourTheme: "white",
              heading: "It's a little cloudy",
              text: "Perfect weather for a cardigan",
              icon: "/images/clouds.png",
            },
          ]);
        highlight === "Rain" &&
          setWarnings((prevWarnings) => [
            ...prevWarnings,
            {
              colourTheme: "blue",
              heading: isDay ? "Heads up! Looks like rain" : "Look forward to dreamy rainfall",
              text: isDay
                ? "Don't forget to take an umbrella!"
                : "Sleep to the soothing sound of rain",
              icon: "/images/heavy.png",
            },
          ]);
        highlight === "Hail" &&
          setWarnings((prevWarnings) => [
            ...prevWarnings,
            {
              colourTheme: "red",
              heading: "Caution: Hail",
              text: "Proceed with caution",
              icon: "/images/hail.png",
            },
          ]);
        highlight === "Windy" &&
          setWarnings((prevWarnings) => [
            ...prevWarnings,
            {
              colourTheme: "amber",
              heading: "Caution: High Winds",
              text: "Take a hair tie or wear a hat",
              icon: "/images/wind.png",
            },
          ]);
      });

      setWarnings((prevWarnings) =>
        prevWarnings.filter((warning) => warning !== noDataWarning)
      );
    }
  }, [forecast, setWarnings]);

  useEffect(() => {
    fetchWarnings();
  }, [forecast, fetchWarnings]);

  return { warnings };
};
