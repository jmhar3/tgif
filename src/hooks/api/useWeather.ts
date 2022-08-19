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
    const weatherApiKey = "c027c43357a44b159a8dc9d2a37fbb02";
    if (currentLocation) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${weatherApiKey}&units=metric`
        );
        setCurrentWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [currentLocation]);

  const fetchWeatherForecast = useCallback(async () => {
    const forecastApiKey = "13c90c3b9586d2890f96ada2c712a1a6";
    if (currentLocation) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${forecastApiKey}&units=metric`
        );
        setWeatherForecast(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [currentLocation]);

  useEffect(() => {
    fetchCurrentWeather();
    fetchWeatherForecast();
  }, [fetchCurrentWeather, fetchWeatherForecast]);

  return { currentWeather, weatherForecast };
};
