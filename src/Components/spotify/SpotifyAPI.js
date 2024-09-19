import querystring from "query-string";
import { Buffer } from "buffer";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

console.log("Environment Variables:");
console.log("Client ID:", client_id);
console.log("Client Secret:", client_secret ? "[REDACTED]" : "undefined");
console.log("Refresh Token:", refresh_token ? "[REDACTED]" : "undefined");

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

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  console.log("Fetching now playing...");
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async function getNowPlayingItem() {
  try {
    const response = await getNowPlaying();
    console.log("API Response status:", response.status);

    if (response.status === 204 || response.status > 400) {
      console.log("Error response:", await response.text());
      return false;
    }

    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    };
  } catch (error) {
    console.error("Error fetching now playing:", error);
    return false;
  }
}
