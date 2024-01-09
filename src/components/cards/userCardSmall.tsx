import GridItem from "../layout/gridItem";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface UserProfileProps {
  profilePicture: string | undefined;
  reputation: number;
  username: string;
  nickname: string;
  racetreeId: number;
}

const UserProfile: React.FC<UserProfileProps> = ({
  profilePicture,
  reputation,
  username,
  nickname,
  racetreeId,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (profilePicture) {
      setIsLoading(false);
    }
  }, [profilePicture]);
  return (
    <GridItem>
      <div className="card-body w-[300px] h-[450px] bg-base-100 rounded-xl">
        {profilePicture ? (
          <Image
            src={profilePicture}
            alt="Profile Picture"
            width={300}
            height={400}
            className=""
          />
        ) : (
          <div
            className="card-body w-[300px] h-[400px]rounded-t-xl"
            title="Profile Picture"
          ></div>
        )}
        <div className="flex flex-col justify-center align-middle text-center items-center">
          <h1 className="card-title text-xl">{username}</h1>
          <div className="text-center">
            <h2 className="text-sm text-gray-600">&quot;{nickname}&quot;</h2>
          </div>
          <div className="items-center gap-5 text-sm">
            <h3>Reputation {reputation}</h3>
          </div>
          <div className="items-center gap-5 text-sm mt-5">
            <Link href={`/profile/${racetreeId}`}>
              <button className="btn bg-accent">View Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </GridItem>
  );
};

export default UserProfile;
