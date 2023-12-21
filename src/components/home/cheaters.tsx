'use client'
import Image from "next/image";
import cheater from "../../../images/cheater.jpg";

import { useEffect, useRef } from "react";

const Cheaters = () => {
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
    <div className="px-5 pb-5 h-full">
      <div ref={divRef} className="rounded-3xl animate-ease-in min-h-[500px] h-full">
        <div className="p-10">
          <Image src={cheater} alt="Crash" className="rounded-2xl" />
          <h1 className="text-2xl text-neutral pb-5 pt-5">
            Report Cheaters
          </h1>
          <p className="font-mono">
            Reporting cheaters and hackers keeps the community clean. 
            Cheaters will have a negative reputation and will have a permanent mark on their profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cheaters;
