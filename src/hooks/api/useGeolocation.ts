import { useEffect, useMemo, useState } from "react";

export interface CurrentLocation {
 longitude: number,
 latitude: number,
}

export const useGeolocation = () => {
  const [currentLocation, setCurrentLocation] = useState<CurrentLocation>();

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

  return { currentLocation };
};
