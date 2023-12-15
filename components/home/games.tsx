'use client'
import Image from "next/image";
import crash from "../../images/crash.jpg";

import { useEffect, useRef } from "react";

const Games = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade");
          observer.unobserve(entry.target);
        }
      });
    });

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-neutral p-5">
      <div ref={divRef} className="rounded-3xl bg-primary animate-once animate-ease-in">
        <div className="p-5">
          <Image src={crash} alt="Crash" className="rounded-2xl" />
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
