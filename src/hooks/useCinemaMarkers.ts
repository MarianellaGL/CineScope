import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { useMapStore } from "../stores/mapStore";
import { getCinemaMarkerSVG, getCinemaMarkerHoverSVG } from "../constants/markerSVG";

interface Cinema {
  id: number;
  name: string;
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  screens: number;
}

interface UseCinemaMarkersProps {
  cinemas: Cinema[];
  addMarker: (marker: google.maps.Marker) => void;
  clearMarkers: () => void;
}

export const useCinemaMarkers = ({ cinemas, addMarker, clearMarkers }: UseCinemaMarkersProps) => {
  const map = useMap();
  const { setSelectedCinema, setMapCenter } = useMapStore();

  useEffect(() => {
    if (!map || cinemas.length === 0) return;

    clearMarkers();

    cinemas.forEach((cinema) => {
      const svg = getCinemaMarkerSVG();
      const svgHover = getCinemaMarkerHoverSVG(cinema.id);

      const marker = new google.maps.Marker({
        position: { lat: cinema.latitude, lng: cinema.longitude },
        icon: {
          url: `data:image/svg+xml;base64,${btoa(svg)}`,
          scaledSize: new google.maps.Size(36, 36),
          anchor: new google.maps.Point(18, 36),
        },
        title: cinema.name,
      });

      marker.addListener("mouseover", () => {
        marker.setIcon({
          url: `data:image/svg+xml;base64,${btoa(svgHover)}`,
          scaledSize: new google.maps.Size(42, 42),
          anchor: new google.maps.Point(21, 42),
        });
      });

      marker.addListener("mouseout", () => {
        marker.setIcon({
          url: `data:image/svg+xml;base64,${btoa(svg)}`,
          scaledSize: new google.maps.Size(36, 36),
          anchor: new google.maps.Point(18, 36),
        });
      });

      marker.addListener("click", () => {
        setSelectedCinema(cinema);
        const position = { lat: cinema.latitude, lng: cinema.longitude };
        setMapCenter(position);
        if (map) {
          map.panTo(position);
        }
      });

      addMarker(marker);
    });
  }, [map, cinemas, addMarker, clearMarkers, setSelectedCinema, setMapCenter]);
};
