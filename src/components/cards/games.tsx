import Image from "next/image";
import React from "react";

const placeHolderGames = [
  {
    name: "Forza Horizon 5",
    appid: 1551360,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg",
  },
  {
    name: "Assetto Corsa Competizione",
    appid: 805550,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/805550/header.jpg",
  },
  {
    name: "Automobilista_2",
    appid: 1066890,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1066890/header.jpg",
  },
  {
    name: "iRacing",
    appid: 266410,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/266410/header.jpg",
  },
  
];

interface Game {
  name: string;
  appid: number;
  image: string;
}

interface GamesProps {
  steamId: string;
}

const CarouselItem = ({ src, name }: { src: string; name: string }) => {
  return (
    <div className="carousel-item mr-2">
      <Image
        src={src}
        alt={name}
        className="carousel-item"
        width={300}
        height={200}
      />
    </div>
  );
};

const Games: React.FC<GamesProps> = ({ steamId }) => {
  const [gamesLoading, setGamesLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  const [games, setGames] = React.useState<Game[]>([]);
  const protocal = window.location.protocol;

  // Fetch games of user
  React.useEffect(() => {
    fetch(
      `${protocal}//${window.location.host}/games/user-games?steam_id=${steamId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setGamesLoading(false);
      })
      .catch((err) => {
        setGamesLoading(false);
        setError(true);
      });
  }, [steamId]);

  return (
    <div className="bg-base-100  rounded-2xl m-5">
      <div className="card-body p-5">
        <h1 className="card-title text-xl">Games</h1>
        {gamesLoading || error ? (
          <div className="flex w-[800px]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 ml-64 border-black"></div>
          </div>
        ) : (
          <div className="carousel rounded-box">
            {games.slice(0, 10).map((game) => {
              return (
                <CarouselItem
                  src={`https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header.jpg`}
                  name={game.name}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;
