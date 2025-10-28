import { Starfield } from "../../Components/Landing/Starfield";
import { BackgroundBlobs } from "../../Components/Landing/BackgroundBlobs";
import { HeroSection } from "../../Components/Landing/HeroSection";
import { StatsSection } from "../../Components/Landing/StatsSection";
import { FeaturesSection } from "../../Components/Landing/FeaturesSection";
import { CTASection } from "../../Components/Landing/CTASection";
import { FooterSection } from "../../Components/Landing/FooterSection";

export const LandingPage = () => {
  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
      delay: Math.random() * 3,
    }));
  };

  const stars = generateStars(150);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 w-full">
      <Starfield stars={stars} />
      <BackgroundBlobs />

      <div className="flex flex-col w-full gap-18">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CTASection />
        <FooterSection />
      </div>
    </div>
  );
};
