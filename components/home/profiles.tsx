'use client'
import Image from "next/image";
import crash from "../../images/crash.jpg";

import { useEffect, useRef } from "react";

const Profiles = () => {
  const divRef = useRef<HTMLDivElement>(null);

  // Intersection Observer. Only animate when the element is in view
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
    <div className="bg-neutral px-5 pb-5">
      <div ref={divRef} className="rounded-3xl bg-secondary animate-ease-in">
        <div className="p-5">
          <Image src={crash} alt="Crash" className="rounded-2xl" />
          <h1 className="text-2xl text-neutral pb-5 pt-5">
            Verified Profiles
          </h1>
          <p className="font-mono">
            Connect your iRacing account or Steam account to verify your profile.
            Verified profiles will have a badge on their profile and will be able to standout from the crowd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
