import { useEffect, useState, useCallback } from "react";
import { Forecast } from "./api/useWeather";

export interface WarningData {
  colourTheme: string;
  heading: string;
  text: string;
  icon: string;
}

export const useWarnings = (forecast?: Forecast[]) => {
  const noDataWarning = {
    colourTheme: "white",
    heading: "There's no data available",
    text: "Go stand outside and collect the data yourself",
    icon: "/images/clouds.png",
  };

  const [warnings, setWarnings] = useState<WarningData[]>([noDataWarning, {
   colourTheme: "blue",
   heading: "There's Blue",
   text: "Go stand outside and collect the data yourself",
   icon: "/images/clouds.png",
 }, {
  colourTheme: "amber",
  heading: "There's Amber",
  text: "Go stand outside and collect the data yourself",
  icon: "/images/clouds.png",
}, {
 colourTheme: "red",
 heading: "There's Red",
 text: "Go stand outside and collect the data yourself",
 icon: "/images/clouds.png",
}, {
 colourTheme: "default",
 heading: "There's default",
 text: "Go stand outside and collect the data yourself",
 icon: "/images/clouds.png",
}]);

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
              heading: "Heads up! Looks like rain",
              text: "Don't forget to take an umbrella!",
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
