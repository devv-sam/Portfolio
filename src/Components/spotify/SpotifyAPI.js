import querystring from "query-string";
import { Buffer } from "buffer";

const LAST_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  console.log("Requesting access token...");
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  const data = await response.json();
  console.log("Token response:", data);
  return data;
};

export const getLastPlayed = async () => {
  const { access_token } = await getAccessToken();

  console.log("Fetching last played song...");
  return fetch(LAST_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async function getLastPlayedItem() {
  try {
    const response = await getLastPlayed();
    console.log("API Response status:", response.status);

    if (response.status === 204 || response.status > 400) {
      console.log("Error response:", await response.text());
      return false;
    }

    const data = await response.json();
    const lastPlayedTrack = data.items[0].track;

    const albumImageUrl = lastPlayedTrack.album.images[0].url;
    const artist = lastPlayedTrack.artists
      .map((artist) => artist.name)
      .join(", ");
    const songUrl = lastPlayedTrack.external_urls.spotify;
    const title = lastPlayedTrack.name;
    const playedAt = data.items[0].played_at;

    return {
      albumImageUrl,
      artist,
      songUrl,
      title,
      playedAt,
    };
  } catch (error) {
    console.error("Error fetching last played song:", error);
    return false;
  }
}
