import { useMemo, useCallback } from "react";

export const useGeolocation = () => {
  const geolocationPermissions = useMemo(() => {
    if ("geolocation" in navigator) {
      return true;
    } else {
      return false;
    }
  }, [navigator]);

  const currentLocation = useCallback(() => {
    if (geolocationPermissions) {
      navigator.geolocation.getCurrentPosition((position) => {
        return {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      });
    }
  }, [geolocationPermissions, navigator]);

  return { geolocationPermissions, currentLocation };
};
