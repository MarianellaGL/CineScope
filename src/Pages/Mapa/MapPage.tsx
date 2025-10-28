import { memo } from "react";
import { Map } from "@vis.gl/react-google-maps";
import { MapHeader } from "../../Components/MapHeader";
import { SearchBar } from "../../Components/SearchBar";
import { MapControls } from "../../Components/MapControls";
import { MapOnboarding } from "../../Components/MapOnboarding";
import { CinemaInfoCard } from "../../Components/CinemaInfoCard";
import { useMapPage } from "../../hooks/useMapPage";

const MapPageComponent = () => {
  const {
    locationLoading,
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
  } = useMapPage();

  return (
    <div className="map-container flex flex-col items-center w-full p-4 md:p-8 gap-6 pt-12 md:pt-16">
      <MapHeader
        locationLoading={locationLoading}
        userProvince={userProvince}
      />

      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
        resultsCount={filteredCinemas.length}
        onboardingStep={onboardingStep}
        onOnboardingNext={handleOnboardingNext}
        onOnboardingClose={handleOnboardingClose}
      />

      <div className="w-full max-w-[570px] relative">
        <div className="h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 relative">
          {!isMapReady && (
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm z-50 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <p className="text-gray-400 text-sm">Loading map...</p>
              </div>
            </div>
          )}

          <MapControls
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
            onRecenter={handleRecenterToUser}
            showRecenter={!!userLocation}
          />

          <Map
            mapId="cd9af96b012034047c914aee"
            defaultCenter={mapCenter}
            defaultZoom={mapZoom}
            gestureHandling="greedy"
            disableDefaultUI={true}
            clickableIcons={false}
            reuseMaps={true}
          />

          {onboardingStep === 2 && (
            <MapOnboarding
              step={2}
              onNext={handleOnboardingNext}
              onClose={handleOnboardingClose}
            />
          )}
        </div>

        {selectedCinema && <CinemaInfoCard cinema={selectedCinema} />}
      </div>
    </div>
  );
};

export const MapPage = memo(MapPageComponent);
