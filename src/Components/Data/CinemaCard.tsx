import { FaMapMarkerAlt } from "react-icons/fa";
import type { Cinema } from "../../types/cinema";

interface CinemaCardProps {
  cinema: Cinema;
  onViewOnMap: (cinema: Cinema) => void;
}

export const CinemaCard = ({ cinema, onViewOnMap }: CinemaCardProps) => {
  return (
    <div className="bg-slate-900/30 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 shadow-lg hover:bg-slate-800/40 transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-4">{cinema.name}</h3>
      <div className="mb-4 space-y-3">
        <div className="flex justify-between items-start gap-4">
          <span className="text-gray-400 flex-shrink-0">City:</span>
          <span className="text-white text-right">{cinema.city}</span>
        </div>
        <div className="flex justify-between items-start gap-4">
          <span className="text-gray-400 flex-shrink-0">Address:</span>
          <span className="text-white text-right break-words">
            {cinema.address || "-"}
          </span>
        </div>
      </div>
      <button
        onClick={() => onViewOnMap(cinema)}
        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-white transition-all duration-300 font-medium"
        title="Search cinema on map"
      >
        <FaMapMarkerAlt className="text-base" />
        <span>View on Map</span>
      </button>
    </div>
  );
};
