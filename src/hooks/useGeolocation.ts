import { useEffect, useState } from "react";
import { useMapStore } from "../stores/mapStore";
import { detectProvince } from "../utils/provinceDetector";

interface GeolocationState {
  loading: boolean;
  error: string | null;
}

const LOCATION_STORAGE_KEY = "cinescope_user_location";
const PROVINCE_STORAGE_KEY = "cinescope_user_province";

const hasSimilarLocation = (
  loc1: { lat: number; lng: number },
  loc2: { lat: number; lng: number }
) => {
  const latDiff = Math.abs(loc1.lat - loc2.lat);
  const lngDiff = Math.abs(loc1.lng - loc2.lng);
  return latDiff < 0.001 && lngDiff < 0.001;
};

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>(() => {
    const cachedLocation = localStorage.getItem(LOCATION_STORAGE_KEY);

    return {
      loading: !cachedLocation,
      error: null,
    };
  });

  const setUserLocation = useMapStore((state) => state.setUserLocation);
  const setUserProvince = useMapStore((state) => state.setUserProvince);

  useEffect(() => {
    const cachedLocation = localStorage.getItem(LOCATION_STORAGE_KEY);
    const cachedProvince = localStorage.getItem(PROVINCE_STORAGE_KEY);

    if (cachedLocation && cachedProvince) {
      const location = JSON.parse(cachedLocation);
      setUserLocation(location);
      setUserProvince(cachedProvince);
    }

    if (!navigator.geolocation) {
      setState({
        loading: false,
        error: "Geolocation is not supported by your browser",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const shouldUpdate = !cachedLocation ||
          !hasSimilarLocation(newLocation, JSON.parse(cachedLocation));

        if (shouldUpdate) {
          setUserLocation(newLocation);
          localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(newLocation));

          const province = detectProvince(newLocation.lat, newLocation.lng);
          setUserProvince(province);
          localStorage.setItem(PROVINCE_STORAGE_KEY, province);
        }

        setState({ loading: false, error: null });
      },
      (error) => {
        setState({
          loading: false,
          error: error.message,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, [setUserLocation, setUserProvince]);

  return state;
};
