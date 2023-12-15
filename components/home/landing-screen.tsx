import Image from "next/image";
const LandingScreen = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl md:text-9xl p-5 animate-fade-left text-neutral">🏎️</h1>
          <h1 className="text-3xl md:text-5xl font-bold text-neutral">
            Made for Sim Racing Professionals and Hobbyists
          </h1>
          <p className="py-6 font-mono text-base md:text-lg text-neutral">
            Showcase your racing accoldates on your free profile and build a
            reputation among fellow racers with crowdsourced stewarding. Upload
            clips of racing incidents and highlights for RaceTree members to
            judge!
          </p>
          <button className="btn btn-accent animate-bounce">Create your profile</button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
