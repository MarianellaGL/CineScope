interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  opacity: number;
  delay: number;
}

interface StarfieldProps {
  stars: Star[];
}

export const Starfield = ({ stars }: StarfieldProps) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: "3s",
          }}
        />
      ))}
    </div>
  );
};
