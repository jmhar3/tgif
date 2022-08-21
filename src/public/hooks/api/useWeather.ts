import { useCallback, useEffect, useState } from "react";
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
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: {
    description: string;
    main: string;
  }[];
}

export interface WeatherForecast {
  city: {
    name: string;
  };
  list: {
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
  }[];
}

export const useWeather = () => {
  const { currentLocation } = useGeolocation();

  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>();
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast>();

  const fetchCurrentWeather = useCallback(async () => {
    if (currentLocation && process.env.WEATHER_API_KEY) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
        );
        setCurrentWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [currentLocation, process.env.WEATHER_API_KEY]);

  const fetchWeatherForecast = useCallback(async () => {
        console.log(process.env.WEATHER_API_KEY)
    if (currentLocation) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
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

  return { currentWeather, weatherForecast };
};
