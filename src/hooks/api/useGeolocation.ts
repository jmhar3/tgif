import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";

export interface CurrentLocation {
  longitude: number;
  latitude: number;
}

export const useGeolocation = () => {
  const [currentLocation, setCurrentLocation] = useState<CurrentLocation>();

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

  useEffect(() => {
    if ("geolocation" in navigator) {
      return navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, [setCurrentLocation]);

  return { currentLocation, currentDateTime };
};
