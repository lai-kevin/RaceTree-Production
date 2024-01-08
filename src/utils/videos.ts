export const getYoutubeVideoID = (youtubeURL: string) => {
  const url = new URL(youtubeURL);
  return url.searchParams.get("v");
};

export const getYoutubeThubmnailURL = (youtubeURL: string) => {
  return `https://img.youtube.com/vi/${getYoutubeVideoID(youtubeURL)}/0.jpg`;
};
