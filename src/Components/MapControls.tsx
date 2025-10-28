import { FaPlus, FaMinus, FaLocationArrow } from "react-icons/fa";

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onRecenter?: () => void;
  showRecenter: boolean;
}

export const MapControls = ({
  onZoomIn,
  onZoomOut,
  onRecenter,
  showRecenter,
}: MapControlsProps) => {
  return (
    <>
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <button
          onClick={onZoomIn}
          className="bg-slate-800/90 backdrop-blur-md hover:bg-primary text-white p-3 rounded-lg shadow-xl transition-all duration-300 hover:scale-110"
          title="Zoom in"
        >
          <FaPlus />
        </button>
        <button
          onClick={onZoomOut}
          className="bg-slate-800/90 backdrop-blur-md hover:bg-primary text-white p-3 rounded-lg shadow-xl transition-all duration-300 hover:scale-110"
          title="Zoom out"
        >
          <FaMinus />
        </button>
      </div>

      {showRecenter && onRecenter && (
        <button
          onClick={onRecenter}
          className="absolute top-4 right-4 z-10 bg-slate-800/90 backdrop-blur-md hover:bg-primary text-white p-3 rounded-lg shadow-xl transition-all duration-300 hover:scale-110"
          title="Return to my location"
        >
          <FaLocationArrow />
        </button>
      )}
    </>
  );
};
