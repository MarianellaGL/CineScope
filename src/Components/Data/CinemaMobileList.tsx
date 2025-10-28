import { CinemaCard } from "./CinemaCard";

interface Cinema {
  id: number;
  name: string;
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  screens: number;
}

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
