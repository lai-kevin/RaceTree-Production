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
import Clips from "@/src/components/cards/clips";
import Games from "@/src/components/cards/games";
import Frame from "@/src/components/layout/frame";

export default function Profile() {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <Frame>
      <div className="card shadow-xl min-h-screen bg-neutral">
        <Mobile>
          <User />
          <AboutMe />
          <Leagues />
          <Games />
          <Clips />
        </Mobile>

        <Desktop>
          <div className="flex flex-row max-h-screen">
            <div className="w-1/2">
              <User />
              <AboutMe />
            </div>
            <div className="w-1/2">
              <Leagues />
              <Games />
              <Clips />
            </div>
          </div>
        </Desktop>
      </div>
    </Frame>
  );
}
