import Image from "next/image";
import crash from "../../images/crash.jpg";

const Games = () => {
  return (
    <div className="bg-neutral p-5">
      <div className="rounded-3xl bg-primary">
        <div className="p-5">
          <Image src={crash} alt="Crash" className="rounded-2xl"/>
          <h1 className="text-2xl text-neutral pb-5 pt-5">
            Crowdsourced Stewarding
          </h1>
          <p className="font-mono">
            Upload clips of racing incidents for RaceTree members to judge!
            Accident or racing incident? You decide! Drivers that cause
            incidents will be penalized and have their reputation affected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Games;
