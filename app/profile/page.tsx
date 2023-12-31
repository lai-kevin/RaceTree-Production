"use client";
import NavBar from "@/src/components/global/navbar";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Profile() {
  const { isSignedIn, user, isLoaded } = useUser();
  const caro = "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg";
  const src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU";
  return (
    <div data-theme="retro">
      <NavBar />
      <main>
        <div className="card shadow-xl min-h-screen bg-neutral pt-[4rem]">
          {/* Mobile View */}
          <div className="md:hidden bg-neutral">
            {/* User Card */}
            <div className="bg-base-100 rounded-2xl p-5 m-5">
              <figure className="px-10 pt-10">
                <Image
                  loader={() => src}
                  src={src}
                  alt="Profile Picture"
                  className="rounded-xl"
                  width={300}
                  height={300}
                />
              </figure>
              <div className="card-body p-0 items-center">
                <h1 className="card-title text-3xl mt-3">KEVIN_AMG</h1>
                <div className="text-center">
                  <h2 className="text-sm text-gray-600">
                    &quot;The Falcon&quot;
                  </h2>
                </div>

                {/* Stats Section */}
                <div className="my-2">
                  <div className="stats stats-horizontal bg-secondary">
                    <div className="stat p-3">
                      <div className="stat-title">Profile Views</div>
                      <div className="stat-value">31K</div>
                      <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat p-3">
                      <div className="stat-title">Reputation</div>
                      <div className="stat-value">4,200</div>
                      <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="card-actions justify-center">
                  <button className="btn btn-primary w-full bg-accent">
                    Highlights
                  </button>
                  <button className="btn btn-primary w-full bg-accent">
                    Driving Record
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-base-100 rounded-2xl m-5">
              <div className="card-body p-5">
                <h1 className="card-title text-xl">About Me</h1>
                <p className="font-mono">
                  Kevin_AMG is a professional racing driver with a passion for
                  speed and adrenaline. With years of experience on the track,
                  John has established himself as one of the top drivers in the
                  industry. Known for his exceptional skills and fearless
                  driving style, he has achieved numerous victories and set
                  multiple records.
                </p>
              </div>
            </div>

            <div className="bg-base-100 rounded-2xl m-5">
              <div className="card-body p-5">
                <h1 className="card-title text-xl">Leagues</h1>
                <div className="carousel rounded-box">
                  <div className="carousel-item mr-2">
                    <Image
                      loader={() => caro}
                      src={caro}
                      alt="Burger"
                      className="carousel-item"
                      width={100}
                      height={100}
                      objectFit="cover"
                    />
                  </div>
                  <div className="carousel-item mr-2">
                    <Image
                      loader={() => caro}
                      src={caro}
                      alt="Burger"
                      className="carousel-item"
                      width={100}
                      height={100}
                      objectFit="cover"
                    />
                  </div>
                  <div className="carousel-item mr-2">
                    <Image
                      loader={() => caro}
                      src={caro}
                      alt="Burger"
                      className="carousel-item"
                      width={100}
                      height={100}
                      objectFit="cover"
                    />
                  </div>
                  <div className="carousel-item mr-2">
                    <Image
                      loader={() => caro}
                      src={caro}
                      alt="Burger"
                      className="carousel-item"
                      width={100}
                      height={100}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="flex justify-center bg-neutral">
            <div className="invisible hidden flex-col md:flex md:visible"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
