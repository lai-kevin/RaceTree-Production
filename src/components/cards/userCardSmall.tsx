import GridItem from "../layout/gridItem";
import React from "react";
import Image from "next/image";

interface UserProfileProps {
  profilePicture: string;
  reputation: number;
  username: string;
  nickname: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  profilePicture,
  reputation,
  username,
  nickname,
}) => {
  return (
    <GridItem>
      <div className="card-body w-[300px] h-[450px] bg-base-100 rounded-xl">
        <Image
          src={profilePicture}
          alt="Profile Picture"
          width={300}
          height={400}
          className="rounded-t-xl"
        />
        <div className="flex flex-col justify-center align-middle text-center items-center">
          <h1 className="card-title text-xl">KEVIN_AMG</h1>
          <div className="text-center">
            <h2 className="text-sm text-gray-600">&quot;The Falcon&quot;</h2>
          </div>
          <div className="items-center gap-5 text-sm">
            <h3>Reputation {reputation}</h3>
          </div>
          <div className="items-center gap-5 text-sm mt-5">
            <button className="btn bg-accent">View Profile</button>
          </div>
        </div>
      </div>
    </GridItem>
  );
};

export default UserProfile;
