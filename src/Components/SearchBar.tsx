import { FaSearch } from "react-icons/fa";
import { MapOnboarding } from "./MapOnboarding";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: () => void;
  resultsCount: number;
  onboardingStep: number;
  onOnboardingNext: () => void;
  onOnboardingClose: () => void;
}

export const SearchBar = ({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  resultsCount,
  onboardingStep,
  onOnboardingNext,
  onOnboardingClose,
}: SearchBarProps) => {
  return (
    <div className="w-full max-w-[570px]">
      <div className="relative mb-6">
        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none z-10" />
        <input
          type="text"
          placeholder="Search by cinema name or location..."
          value={searchQuery}
          onChange={onSearchChange}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onSearchSubmit();
            }
          }}
          className="search-input w-full px-6 py-4 rounded-xl bg-slate-800/40 backdrop-blur-md border border-slate-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 transition-all duration-300"
        />
        {searchQuery && (
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs text-gray-500">
            {resultsCount} result{resultsCount !== 1 ? "s" : ""}
          </span>
        )}

        {onboardingStep === 1 && (
          <MapOnboarding
            step={1}
            onNext={onOnboardingNext}
            onClose={onOnboardingClose}
          />
        )}
      </div>
    </div>
  );
};
