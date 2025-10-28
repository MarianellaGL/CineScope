import { useNavigate } from "react-router-dom";
import { useCinemas } from "../../Services/FetchMapData";
import { transformCinemasArray } from "../../utils/cinemaTransformer";
import { DataHeader } from "../../Components/Data/DataHeader";
import { CinemaMobileList } from "../../Components/Data/CinemaMobileList";
import { CinemaTable } from "../../Components/Data/CinemaTable";
import type { Cinema } from "../../types/cinema";

export const Data = () => {
  const navigate = useNavigate();
  const { data: apiCinemas, isLoading } = useCinemas();

  const cinemas = apiCinemas ? transformCinemasArray(apiCinemas) : [];

  const handleViewOnMap = (cinema: Cinema) => {
    navigate("/map", { state: { selectedCinema: cinema } });
  };

  if (isLoading) {
    return (
      <div className="data-page-container w-full max-w-7xl mx-auto px-4 md:px-8 pb-12">
        <DataHeader />
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="data-page-container w-full max-w-7xl mx-auto px-4 md:px-8 pb-12">
      <DataHeader />
      <CinemaMobileList cinemas={cinemas} onViewOnMap={handleViewOnMap} />
      <CinemaTable cinemas={cinemas} onViewOnMap={handleViewOnMap} />
    </div>
  );
};
