import { useEffect, useMemo, useState } from "react";

export interface CurrentLocation {
 longitude: number,
 latitude: number,
}

export const useGeolocation = () => {
  const [currentLocation, setCurrentLocation] = useState<CurrentLocation>();

  const geolocationPermissions = useMemo(() => {
    if ("geolocation" in navigator) {
      return true;
    } else {
      return false;
    }
  }, [navigator]);

  useEffect(() => {
    if (geolocationPermissions) {
      return navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, [geolocationPermissions, navigator, setCurrentLocation]);

  return { geolocationPermissions, currentLocation };
};
