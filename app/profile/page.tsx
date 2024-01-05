"use client";
import NavBar from "@/src/components/global/navbar";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Mobile from "@/src/components/layout/mobile";
import User from "@/src/components/cards/user";
import AboutMe from "@/src/components/cards/aboutme";
import Leagues from "@/src/components/cards/leagues";
import Desktop from "@/src/components/layout/desktop";

export default function Profile() {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <div data-theme="retro">
      <NavBar />
      <main>
        <div className="card shadow-xl min-h-screen bg-neutral pt-[4rem]">
          <Mobile>
            <User />
            <AboutMe />
            <Leagues />  
          </Mobile>

          <Desktop>
            <div className="flex flex-row">
              <div className="w-1/2">
                <User />
                <AboutMe />
              </div>
              <div className="w-1/2">
                <Leagues />
              </div>
            </div>
          </Desktop>
        </div>
      </main>
    </div>
  );
}
