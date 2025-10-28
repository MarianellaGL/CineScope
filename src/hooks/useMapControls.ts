import { useCallback } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { useMapStore } from "../stores/mapStore";

export const useMapControls = () => {
  const map = useMap();
  const { mapZoom, userLocation, setMapCenter, setMapZoom } = useMapStore();

  const handleRecenterToUser = useCallback(() => {
    if (userLocation && map) {
      map.panTo(userLocation);
      map.setZoom(14);
      setMapCenter(userLocation);
      setMapZoom(14);
    }
  }, [userLocation, map, setMapCenter, setMapZoom]);

  const handleZoomIn = useCallback(() => {
    if (map) {
      const currentZoom = map.getZoom() || mapZoom;
      const newZoom = Math.min(currentZoom + 1, 20);
      map.setZoom(newZoom);
      setMapZoom(newZoom);
    }
  }, [map, mapZoom, setMapZoom]);

  const handleZoomOut = useCallback(() => {
    if (map) {
      const currentZoom = map.getZoom() || mapZoom;
      const newZoom = Math.max(currentZoom - 1, 3);
      map.setZoom(newZoom);
      setMapZoom(newZoom);
    }
  }, [map, mapZoom, setMapZoom]);

  return {
    handleRecenterToUser,
    handleZoomIn,
    handleZoomOut,
  };
};
