import { useEffect, useRef, useState } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { useLocation } from "react-router-dom";
import { useMapStore } from "../stores/mapStore";
import { useGeolocation } from "./useGeolocation";
import { useMarkerClusterer } from "./useMarkerClusterer";
import { useSearch } from "./useSearch";
import { useOnboarding } from "./useOnboarding";
import { useMapControls } from "./useMapControls";
import { useUserLocationMarker } from "./useUserLocationMarker";
import { useCinemaMarkers } from "./useCinemaMarkers";
import { useCinemas } from "../Services/FetchMapData";
import { transformCinemasArray } from "../utils/cinemaTransformer";

export const useMapPage = () => {
  const location = useLocation();
  const { loading: locationLoading } = useGeolocation();
  const {
    mapCenter,
    mapZoom,
    setCinemas,
    cinemas,
    selectedCinema,
    userLocation,
    userProvince,
    setMapCenter,
    setMapZoom,
    setSelectedCinema,
  } = useMapStore();

  const { addMarker, clearMarkers } = useMarkerClusterer();
  const map = useMap();

  const { data: apiCinemas, isLoading: cinemasLoading } = useCinemas();

  const hasNavigationCinema = useRef(false);
  const hasInitializedUserLocation = useRef(false);
  const previousSelectedCinemaId = useRef<number | string | null>(null);

  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    const state = location.state as { selectedCinema?: any };
    if (state?.selectedCinema) {
      hasNavigationCinema.current = true;
      hasInitializedUserLocation.current = true;
      setIsMapReady(true);
    }
  }, [location]);

  useEffect(() => {
    if (apiCinemas) {
      const transformedCinemas = transformCinemasArray(apiCinemas);
      setCinemas(transformedCinemas);
    }
  }, [apiCinemas, setCinemas]);

  useEffect(() => {
    const state = location.state as {
      selectedCinema?: any;
    };
    if (state?.selectedCinema && map) {
      const cinema = state.selectedCinema;
      const position = { lat: cinema.latitude, lng: cinema.longitude };

      setSelectedCinema(cinema);
      setMapCenter(position);
      setMapZoom(15);
      previousSelectedCinemaId.current = cinema.id;

      setTimeout(() => {
        map.panTo(position);
        map.setZoom(15);
      }, 100);

      window.history.replaceState({}, document.title);
    }
  }, [location, map, setSelectedCinema, setMapCenter, setMapZoom]);

  useEffect(() => {
    if (
      !locationLoading &&
      selectedCinema &&
      map &&
      selectedCinema.id !== previousSelectedCinemaId.current
    ) {
      const position = {
        lat: selectedCinema.latitude,
        lng: selectedCinema.longitude,
      };
      map.panTo(position);
      map.setZoom(mapZoom);
      previousSelectedCinemaId.current = selectedCinema.id;
      hasInitializedUserLocation.current = true;
    }
  }, [locationLoading, selectedCinema, map, mapZoom]);

  useEffect(() => {
    if (
      map &&
      userLocation &&
      !selectedCinema &&
      !locationLoading &&
      !hasInitializedUserLocation.current
    ) {
      setMapCenter(userLocation);
      setMapZoom(14);
      map.panTo(userLocation);
      map.setZoom(14);
      hasInitializedUserLocation.current = true;
      setIsMapReady(true);
    }
  }, [map, userLocation, selectedCinema, locationLoading, setMapCenter, setMapZoom]);

  useEffect(() => {
    if (hasNavigationCinema.current || !locationLoading) {
      setIsMapReady(true);
    }
  }, [locationLoading]);

  const {
    searchQuery,
    filteredCinemas,
    handleSearchChange,
    handleSearchSubmit,
  } = useSearch(cinemas);

  const { onboardingStep, handleOnboardingNext, handleOnboardingClose } =
    useOnboarding(locationLoading, userLocation);

  const { handleRecenterToUser, handleZoomIn, handleZoomOut } =
    useMapControls();

  useUserLocationMarker(userLocation);
  useCinemaMarkers({ cinemas: filteredCinemas, addMarker, clearMarkers });

  return {
    locationLoading,
    cinemasLoading,
    userProvince,
    searchQuery,
    filteredCinemas,
    handleSearchChange,
    handleSearchSubmit,
    onboardingStep,
    handleOnboardingNext,
    handleOnboardingClose,
    handleRecenterToUser,
    handleZoomIn,
    handleZoomOut,
    userLocation,
    selectedCinema,
    isMapReady,
    mapCenter,
    mapZoom,
  };
};
