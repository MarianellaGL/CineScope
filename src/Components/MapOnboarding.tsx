import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTimes, FaLayerGroup } from "react-icons/fa";

interface MapOnboardingProps {
  step: number;
  onNext: () => void;
  onClose: () => void;
}

export const MapOnboarding = ({
  step,
  onNext,
  onClose,
}: MapOnboardingProps) => {
  return (
    <AnimatePresence mode="wait">
      {step === 1 && (
        <motion.div
          key="step1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute top-full left-2 right-2 sm:left-4 sm:right-4 md:left-0 md:right-0 mt-4 z-50"
        >
          <div className="onboarding-card bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-primary/50 rounded-2xl shadow-2xl relative max-w-xl md:max-w-2xl mx-auto">
            <div className="absolute -top-3 left-8 md:left-12 w-6 h-6 bg-gradient-to-br from-slate-900 to-slate-800 border-l-2 border-t-2 border-primary/50 transform rotate-45"></div>

            <button
              onClick={onClose}
              className="onboarding-close-btn absolute top-2 right-2 text-gray-400 hover:text-white transition-colors hover:bg-white/10 rounded-lg"
            >
              <FaTimes size={16} />
            </button>

            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
              <div className="onboarding-icon-box bg-primary/20 rounded-xl shrink-0">
                <FaSearch className="text-primary text-2xl sm:text-3xl" />
              </div>
              <div className="flex-1 w-full pr-8 sm:pr-0">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  Search for Cinemas
                </h3>
                <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                  Type a cinema name or city to find theaters across Argentina.
                  Results will update in real-time!
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-xs text-gray-500">Step 1 of 2</span>
                  <button
                    onClick={onNext}
                    className="onboarding-button w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          key="step2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute top-4 left-2 right-2 sm:left-4 sm:right-4 md:right-auto z-50 md:max-w-md lg:max-w-lg"
        >
          <div className="onboarding-card bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-primary/50 rounded-2xl shadow-2xl relative">
            <div className="hidden md:block absolute -left-3 top-10 w-6 h-6 bg-gradient-to-br from-slate-900 to-slate-800 border-l-2 border-b-2 border-primary/50 transform rotate-45"></div>

            <button
              onClick={onClose}
              className="onboarding-close-btn absolute top-2 right-2 text-gray-400 hover:text-white transition-colors hover:bg-white/10 rounded-lg"
            >
              <FaTimes size={16} />
            </button>

            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
              <div className="onboarding-icon-box bg-primary/20 rounded-xl shrink-0">
                <FaLayerGroup className="text-primary text-2xl sm:text-3xl" />
              </div>
              <div className="flex-1 w-full pr-8 sm:pr-0">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  Explore Clusters
                </h3>
                <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                  Zoom in to see individual cinema markers. When zoomed out,
                  nearby cinemas group into clusters. Click any marker or
                  cluster to explore!
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-xs text-gray-500">Step 2 of 2</span>
                  <button
                    onClick={onClose}
                    className="onboarding-button w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
