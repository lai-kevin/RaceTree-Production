require("dotenv").config();

export const getSteamID64 = (steamUserName: string) => {
  return new Promise((resolve, reject) => {
    const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${process.env.STEAM_API_KEY}&vanityurl=${steamUserName}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          resolve(data.response.steamid);
        } else {
          reject(data.message);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getPlayerSummary = (steamID64: string) => {
  return new Promise((resolve, reject) => {
    const url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${steamID64}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.response.players.length > 0) {
          resolve(data.response.players[0]);
        } else {
          reject("No player found");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getOwnedGames = (steamID64: string) => {
  return new Promise((resolve, reject) => {
    const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamID64}&format=json&include_appinfo=true`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.response.games.length > 0) {
          resolve(data.response.games);
        } else {
          reject("No games found");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getGameImageURL = (gameID: string) => {
  return `https://cdn.akamai.steamstatic.com/steam/apps/${gameID}/header.jpg`
}

export const getYoutubeVideoID = (youtubeURL: string) => {
  const url = new URL(youtubeURL);
  return url.searchParams.get("v");
}

export const getYoutubeThubmnailURL = (youtubeURL: string) => {
  return `https://img.youtube.com/vi/${getYoutubeVideoID(youtubeURL)}/0.jpg`
}