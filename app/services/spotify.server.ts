import SpotifyWebApi from "spotify-web-api-node";
import { getSession } from "~/services/session.server";

export const spotifyApi = new SpotifyWebApi();

export const getTopSongs = async (request: Request) => {
  // set access token
  let session = await getSession(request.headers.get("cookie"));
  const accessToken = session.data["spotify:session"].accessToken;
  spotifyApi.setAccessToken(accessToken);

  // set random offset from 0 to 50
  const offset = Math.floor(Math.random() * 50);

  // fetch top songs
  const topTracks = await spotifyApi.getMyTopTracks({
    offset,
    limit: 40,
  });

  return topTracks.body.items
    .map(
      (s) =>
        `song title: ${s.name}, album name: ${s.album.name}, artist: ${s.artists[0].name}`
    )
    .join("\n");
};
