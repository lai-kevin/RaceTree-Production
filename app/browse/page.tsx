"use client";
import React from 'react';
import Frame from "@/src/components/layout/frame";
import Grid from "@/src/components/layout/grid";
import UserProfile from "@/src/components/cards/userCardSmall";
import User from "@/src/components/cards/user";
import Desktop from "@/src/components/layout/desktop";
import Mobile from "@/src/components/layout/mobile";
import SearchBar from "@/src/components/search";
import { getPlayerSummary } from "@/src/utils/steam";
import { use, useEffect, useState } from "react";

//Sample Data
const users4 = [
  {
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU",
    reputation: 100,
    username: "user1",
    nickname: "User One",
  },
  {
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU",
    reputation: 200,
    username: "user2",
    nickname: "User Two",
  },
  {
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU",
    reputation: 300,
    username: "user3",
    nickname: "User Three",
  },
  {
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU",
    reputation: 100,
    username: "user1",
    nickname: "User One",
  },
  {
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU",
    reputation: 200,
    username: "user2",
    nickname: "User Two",
  },
  {
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU",
    reputation: 300,
    username: "user3",
    nickname: "User Three",
  },
];

interface UserResponse {
  id: number;
  steamid: string;
  name: string;
  reputation: number;
  nickname: string;
  steamId: string;
  views: number;
  avatarfull: string;
}

interface TextLargeCenteredProps {
  text: string;
  className?: string;
}

const TextLargeCentered: React.FC<TextLargeCenteredProps> = ({
  text,
  className,
}) => {
  return <div className={className}>{text}</div>;
};

export default function Browse() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [steamUsers, setSteamUsers] = useState<UserResponse[]>([]);

  // Fetch users
  useEffect(() => {
    const protocal = window.location.protocol;
    const fetchSteamUsers = async (raceTreeUsers: UserResponse[]) => {
      let steamIds = `[${Array.from(
        raceTreeUsers,
        (raceTreeUser: UserResponse) => raceTreeUser.steamId
      ).join(",")}]`;
      fetch(`${protocal}//${window.location.host}/info?steam_ids=${steamIds}`)
        .then((res) => res.json())
        .then((data): void => {
          setSteamUsers(data);
          setIsLoading(false);
        });
    };

    // Fetch users
    fetch(`${protocal}//${window.location.host}/users/browse`)
      .then((res) => res.json())
      .then((raceTreeUsers): void => {
        fetchSteamUsers(raceTreeUsers);
        setUsers(raceTreeUsers);
      });
  }, []);

  return (
    <Frame navMode="dark" className="pt-[4rem] bg-neutral min-h-screen">
      <TextLargeCentered
        text="RACETREE Users"
        className="text-6xl font-bold text-center text-yellow-500 m-5"
      />
      <TextLargeCentered
        text="Search By Steam ID, RaceTree ID, or Team"
        className="text-lg font-bold text-center text-white m-5"
      />
      <SearchBar className="px-4 py-2 m-5 w-96 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300" />

      <div className="flex justify-center">
        {!isLoading ? (
          <Grid columns={1} gap={3} className="p-5 max-w-7xl ">
            {users.map((user: UserResponse) => (
              <UserProfile
                key={user.name}
                profilePicture={
                  steamUsers.find(
                    (steamUser: UserResponse) =>
                      steamUser.steamid === user.steamId
                  )?.avatarfull
                }
                reputation={user.reputation}
                username={user.name}
                nickname={user.nickname}
                racetreeId={user.id}
              />
            ))}
          </Grid>
        ) : (
          <div className="flex justify-center align-middle items-center h-96">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
          </div>
        )}
      </div>
    </Frame>
  );
}
