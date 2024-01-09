import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface UserProps {
  profilePicture: string;
  reputation: number;
  username: string;
  nickname: string;
  views: number;
}
const User = (props: UserProps) => {
  const [isLoading, setIsLoading] = useState(true);
  console.log(props);

  useEffect(() => {
    if (props.profilePicture) {
      setIsLoading(false);
    }
  }, [props.profilePicture]);

  const src = props.profilePicture;
  return (
    <div className="bg-base-100 rounded-2xl p-5 m-5">
      <figure className="px-10 pt-10">
        {src ? (
        <Image
          src={src}
          alt="Profile Picture"
          className="rounded-xl mx-auto" // Add mx-auto class to center the image
          width={300}
          height={300}
        />
        ) : (
          <div
            className="card-body w-[300px] h-[300px]rounded-t-xl"
            title="Profile Picture"
          ></div>
        )}
      </figure>
      <div className="card-body p-0 items-center">
        <h1 className="card-title text-3xl mt-3">{props.username}</h1>
        <div className="text-center">
          <h2 className="text-sm text-gray-600">&quot;{props.nickname}&quot;</h2>
        </div>

        {/* Stats Section */}
        <div className="my-2">
          <div className="stats stats-horizontal bg-secondary">
            <div className="stat p-3">
              <div className="stat-title">Profile Views</div>
              <div className="stat-value">{props.views}</div>
              <div className="stat-desc">Since 2023</div>
            </div>

            <div className="stat p-3">
              <div className="stat-title">Reputation</div>
              <div className="stat-value">{props.reputation}</div>
              <div className="stat-desc">↗︎ {props.reputation/100}x</div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="card-actions justify-center">
          <Link href="/sign-in" className="w-full">
            <button className="btn btn-primary w-full text-white bg-green-700">
              Endorse User
            </button>
          </Link>
          <Link href="/sign-in" className="w-full">
            <button className="btn btn-primary w-full bg-red-500">
              Criticize User
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
