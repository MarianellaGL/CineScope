import { CinemaCard } from "./CinemaCard";
import type { Cinema } from "../../types/cinema";

interface CinemaMobileListProps {
  cinemas: Cinema[];
  onViewOnMap: (cinema: Cinema) => void;
}

export const CinemaMobileList = ({ cinemas, onViewOnMap }: CinemaMobileListProps) => {
  return (
    <div className="data-content md:hidden grid gap-4">
      {cinemas.map((cinema) => (
        <CinemaCard key={cinema.id} cinema={cinema} onViewOnMap={onViewOnMap} />
      ))}
    </div>
  );
};
