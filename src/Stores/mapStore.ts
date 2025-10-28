import { create } from "zustand";
import type { Cinema } from "../types/cinema";

interface MapState {
  userLocation: { lat: number; lng: number } | null;
  setUserLocation: (location: { lat: number; lng: number }) => void;
  userProvince: string | null;
  setUserProvince: (province: string) => void;

  cinemas: Cinema[];
  setCinemas: (cinemas: Cinema[]) => void;

  selectedCinema: Cinema | null;
  setSelectedCinema: (cinema: Cinema | null) => void;

  mapCenter: { lat: number; lng: number };
  setMapCenter: (center: { lat: number; lng: number }) => void;
  mapZoom: number;
  setMapZoom: (zoom: number) => void;
}

export const useMapStore = create<MapState>((set) => ({
  userLocation: null,
  userProvince: null,
  cinemas: [],
  selectedCinema: null,
  mapCenter: { lat: -34.6037, lng: -58.3816 },
  mapZoom: 6,

  setUserLocation: (location) =>
    set({ userLocation: location }),
  setUserProvince: (province) => set({ userProvince: province }),
  setCinemas: (cinemas) => set({ cinemas }),
  setSelectedCinema: (cinema) => set({ selectedCinema: cinema }),
  setMapCenter: (center) => set({ mapCenter: center }),
  setMapZoom: (zoom) => set({ mapZoom: zoom }),
}));
