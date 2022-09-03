import { useCallback, useEffect, useState, useMemo } from "react";
import axios from "axios";

import { useGeolocation } from "./useGeolocation";

export interface CurrentWeather {
  wind: {
    speed: number;
    deg: number;
  };
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    main: string;
  }[];
}

export interface Forecast {
  dt_txt: string;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  rain: {
    "3h": number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}

export interface WeatherForecast {
  city: {
    name: string;
    sunrise: number;
    sunset: number;
  };
  list: Forecast[];
}

export type WeatherStats = {
 isCold: boolean;
 isWindy: boolean;
 isHumid: boolean;
 isRainy: boolean;
 light: string;
};

export const useWeather = () => {
  const { currentLocation, currentDateTime } = useGeolocation();

  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>();
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast>();

  const sunrise = useMemo(
    () => weatherForecast?.city.sunrise,
    [weatherForecast]
  );

  const sunset = useMemo(() => weatherForecast?.city.sunset, [weatherForecast]);

  const isDay = useMemo<boolean | undefined>(() => {
    if (sunrise && sunset) {
      const currentTime = Math.round(Date.now() / 1000);
      return !!(currentTime > sunrise && currentTime < sunset);
    }
  }, [sunrise, sunset]);

  const fetchCurrentWeather = useCallback(async () => {
    if (currentLocation && process.env.WEATHER_API_KEY) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=56de9e94a9ffcf326de15a54e3186cd9&units=metric`
        );
        setCurrentWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [currentLocation, process.env.WEATHER_API_KEY]);

  const fetchWeatherForecast = useCallback(async () => {
    if (currentLocation) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=56de9e94a9ffcf326de15a54e3186cd9&units=metric`
        );
        setWeatherForecast(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [currentLocation, process.env.WEATHER_API_KEY]);

  useEffect(() => {
    fetchCurrentWeather();
    fetchWeatherForecast();
  }, [fetchCurrentWeather, fetchWeatherForecast]);

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

  return { currentWeather, weatherForecast, isDay, sunrise, sunset, todaysForecast, weatherStats };
};
