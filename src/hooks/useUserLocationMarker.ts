import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { getUserLocationMarkerSVG } from "../constants/markerSVG";

export const useUserLocationMarker = (userLocation: { lat: number; lng: number } | null) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !userLocation) return;

    map.panTo(userLocation);
    map.setZoom(14);

    const userMarker = new google.maps.Marker({
      position: userLocation,
      map: map,
      icon: {
        url: `data:image/svg+xml;base64,${btoa(getUserLocationMarkerSVG())}`,
        scaledSize: new google.maps.Size(40, 40),
        anchor: new google.maps.Point(20, 20),
      },
      title: "Your Location",
      zIndex: 1000,
    });

    return () => {
      userMarker.setMap(null);
    };
  }, [map, userLocation]);
};
