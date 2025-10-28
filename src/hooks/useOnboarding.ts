import { useState, useEffect, useCallback } from "react";

const ONBOARDING_DISMISSED_KEY = "cinescope_onboarding_dismissed";

export const useOnboarding = (locationLoading: boolean, userLocation: { lat: number; lng: number } | null) => {
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(() => {
    const dismissed = localStorage.getItem(ONBOARDING_DISMISSED_KEY);
    return dismissed === "true";
  });

  useEffect(() => {
    if (!locationLoading && !userLocation && !hasBeenDismissed) {
      const timer = setTimeout(() => {
        setOnboardingStep(1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [locationLoading, userLocation, hasBeenDismissed]);

  const handleOnboardingNext = useCallback(() => {
    setOnboardingStep((prev) => prev + 1);
  }, []);

  const handleOnboardingClose = useCallback(() => {
    setOnboardingStep(0);
    setHasBeenDismissed(true);
    localStorage.setItem(ONBOARDING_DISMISSED_KEY, "true");
  }, []);

  return {
    onboardingStep,
    handleOnboardingNext,
    handleOnboardingClose,
  };
};
