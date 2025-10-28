export const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse"></div>
      <div
        className="absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-accent/20 blur-[120px] animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[100px] animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
};
