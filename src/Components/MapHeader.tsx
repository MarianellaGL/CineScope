import { FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

interface MapHeaderProps {
  locationLoading: boolean;
  userProvince: string | null;
}

export const MapHeader = ({
  locationLoading,
  userProvince,
}: MapHeaderProps) => {
  return (
    <>
      <div className="text-center">
        <h1 className="map-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Explore{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Cinemas
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Discover cinemas across Argentina on our interactive map
        </p>
      </div>

      {/* Location status */}
      {locationLoading && (
        <div className="flex items-center gap-2 text-gray-400">
          <FaSpinner className="animate-spin" />
          <span>Getting your location...</span>
        </div>
      )}

      {/* Show detected province */}
      {userProvince && !locationLoading && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-primary font-medium"
        >
          <span>📍</span>
          <span>Searching in: {userProvince}</span>
        </motion.div>
      )}
    </>
  );
};
