import Image from "next/image";
const LandingScreen = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl p-5 animate-fade-left">🏎️</h1>
          <h1 className="text-5xl font-bold">
            Made for Sim Racing Professionals and Hobbyists
          </h1>
          <p className="py-6 font-mono">
            Showcase your racing accoldates on your free profile and build a
            reputation among fellow racers with crowdsourced stewarding. Upload
            clips of racing incidents and highlights for RaceTree members to
            judge!
          </p>
          <button className="btn btn-primary animate-bounce">Create your profile</button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
