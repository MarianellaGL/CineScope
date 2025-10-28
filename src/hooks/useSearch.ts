import { useState, useCallback, useMemo } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { useMapStore } from "../stores/mapStore";

interface Cinema {
  id: number | string;
  name: string;
  city: string;
  address?: string;
  latitude: number;
  longitude: number;
  screens?: number;
  province?: string;
  tags?: Record<string, any>;
}

export const useSearch = (cinemas: Cinema[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const map = useMap();
  const { setMapCenter, setSelectedCinema } = useMapStore();

  const filteredCinemas = useMemo(() => {
    if (!searchQuery.trim()) return cinemas;

    const query = searchQuery.toLowerCase();
    return cinemas.filter((cinema) =>
      cinema.name.toLowerCase().includes(query) ||
      cinema.city.toLowerCase().includes(query)
    );
  }, [cinemas, searchQuery]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleSearchSubmit = useCallback(() => {
    if (filteredCinemas.length > 0 && map) {
      if (filteredCinemas.length === 1) {
        const cinema = filteredCinemas[0];
        const position = { lat: cinema.latitude, lng: cinema.longitude };
        map.panTo(position);
        map.setZoom(15);
        setMapCenter(position);
        setSelectedCinema(cinema);
      } else {
        const bounds = new google.maps.LatLngBounds();
        filteredCinemas.forEach((cinema) => {
          bounds.extend({ lat: cinema.latitude, lng: cinema.longitude });
        });
        map.fitBounds(bounds, { padding: 80 });
        setSelectedCinema(null);
      }
    }
  }, [filteredCinemas, map, setMapCenter, setSelectedCinema]);

  return {
    searchQuery,
    filteredCinemas,
    handleSearchChange,
    handleSearchSubmit,
  };
};
