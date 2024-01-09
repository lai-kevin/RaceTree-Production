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

interface UserResponse {
  steamId: string;
  name: string;
  profilePicture: string;
  reputation: number;
  aboutMe: string;
}

export default function Profile({ params }: { params: { id: string } }) {
  const [user, setUser] = useState<any>(null);
  const [steamSummary, setSteamSummary] = useState<any>(null);
  // Fetch steam user and racetree user
  useEffect(() => {
    const protocal = window.location.protocol;
    const fetchSteamUser = async (raceTreeUser: UserResponse) => {
      fetch(
        `${protocal}//${window.location.host}/info?steam_ids=[${raceTreeUser.steamId}]`
      )
        .then((res) => res.json())
        .then((data): void => {
          setSteamSummary(data[0]);
        });
    };

    // Fetch racetree user
    fetch(`${protocal}//${window.location.host}/users?racetree_id=${params.id}`)
      .then((res) => res.json())
      .then((raceTreeUser): void => {
        fetchSteamUser(raceTreeUser);
        setUser(raceTreeUser);
      });
  }, [params.id]);
  return (
    <Frame navMode="dark" className="pt-[4rem]">
      <div className="shadow-xl min-h-screen bg-neutral">
        {steamSummary && user ? (
          <>
            <Mobile>
              <User
                profilePicture={steamSummary.avatarfull}
                reputation={user.reputation}
                username={user.name}
                nickname={user.nickname}
                views={user.views}
                aboutme={user.aboutMe}
              />
              <AboutMe aboutMe={user.aboutMe} />
              <Games />
              <Clips />
            </Mobile>

            <Desktop>
              <div className="flex flex-row max-h-screen">
                <div className="w-1/2">
                  <User
                    profilePicture={steamSummary.avatarfull}
                    reputation={user.reputation}
                    username={user.name}
                    nickname={user.nickname}
                    views={user.views}
                    aboutme={user.aboutme}
                  />
                  <AboutMe aboutMe={user.aboutMe}/>
                </div>
                <div className="w-1/2">
                  <Games />
                  <Clips />
                </div>
              </div>
            </Desktop>
          </>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <h1 className="animate-bounce text-white text-4xl">Loading...</h1>
          </div>
        )}
      </div>
    </Frame>
  );
}
