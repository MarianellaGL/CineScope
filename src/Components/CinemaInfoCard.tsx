import { motion } from "framer-motion";

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

interface CinemaInfoCardProps {
  cinema: Cinema;
}

export const CinemaInfoCard = ({ cinema }: CinemaInfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 shadow-xl"
    >
      <h3 className="text-2xl font-bold text-white mb-3">{cinema.name}</h3>
      <div className="space-y-2 text-gray-400">
        <p className="flex items-center gap-2">
          <span className="text-primary">📍</span>
          {cinema.city}
        </p>
        {cinema.address && (
          <p className="flex items-center gap-2">
            <span className="text-primary">🏠</span>
            {cinema.address}
          </p>
        )}
      </div>
    </motion.div>
  );
};
