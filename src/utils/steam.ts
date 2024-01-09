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

export const getPlayerSummary = (steamID64Array: string) => {
  return new Promise((resolve, reject) => {
    const url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${steamID64Array}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.response.players.length > 0) {
          resolve(data.response.players);
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
    const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamID64}&format=json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!data.response.games) {
          reject("No games found");
        }
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