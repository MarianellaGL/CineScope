import { FaMapMarkerAlt } from "react-icons/fa";
import type { Cinema } from "../../types/cinema";

interface CinemaTableProps {
  cinemas: Cinema[];
  onViewOnMap: (cinema: Cinema) => void;
}

export const CinemaTable = ({ cinemas, onViewOnMap }: CinemaTableProps) => {
  return (
    <div className="data-content hidden md:block overflow-x-auto rounded-2xl border border-slate-700/50 shadow-2xl mt-16 w-full">
      <table className="w-full border-collapse text-left">
        <thead className="bg-slate-800/60 backdrop-blur-md border-b border-slate-700/50">
          <tr>
            <th className="cinema-table-cell text-sm md:text-base font-semibold text-gray-300">
              Name
            </th>
            <th className="cinema-table-cell text-sm md:text-base font-semibold text-gray-300">
              City
            </th>
            <th className="cinema-table-cell text-sm md:text-base font-semibold text-gray-300 hidden lg:table-cell">
              Address
            </th>
            <th className="cinema-table-cell text-sm md:text-base font-semibold text-gray-300 text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="bg-slate-900/30">
          {cinemas.map((cinema) => (
            <tr
              key={cinema.id}
              className="border-b border-slate-700/30 hover:bg-slate-800/40 transition-colors duration-200"
            >
              <td className="cinema-table-cell text-white text-sm md:text-base">
                {cinema.name}
              </td>
              <td className="cinema-table-cell text-gray-400 text-sm md:text-base">
                {cinema.city}
              </td>
              <td className="cinema-table-cell text-gray-400 text-sm md:text-base hidden lg:table-cell">
                {cinema.address || "-"}
              </td>
              <td className="cinema-table-cell text-center">
                <button
                  onClick={() => onViewOnMap(cinema)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-white transition-all duration-300 text-sm md:text-base font-medium hover:scale-105"
                  title="Search cinema on map"
                >
                  <FaMapMarkerAlt className="text-base" />
                  <span>View on Map</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
