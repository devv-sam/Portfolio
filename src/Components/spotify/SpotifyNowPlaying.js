import React, { useEffect, useState } from "react";
import getLastPlayedItem from "./SpotifyAPI";
import SpotifyLogo from "./SpotifyLogo";

const truncateString = (str, num) => {
  // Check if str is undefined or not a string
  if (typeof str !== "string") {
    return "";
  }

  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

const SpotifyLastPlayed = ({
  client_id,
  client_secret,
  refresh_token,
  updateInterval = 60000,
}) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLastPlayedItem(
          client_id,
          client_secret,
          refresh_token
        );
        if (data && data.title !== result.title) {
          setResult(data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching last played song:", error);
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, updateInterval);
    return () => clearInterval(intervalId);
  }, [client_id, client_secret, refresh_token, updateInterval, result.title]);

  return (
    <div className="box">
      {loading ? (
        <div>
          <div>Loading...</div>
        </div>
      ) : (
        <div className="result-box">
          <div className="head-gap">
            <SpotifyLogo />
            <p className="song-title">Last Played</p>
          </div>
          {result && (
            <div>
              <div className="head-gap">
                <a
                  href={result.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt={`${result.title} album art`}
                    src={result.albumImageUrl}
                    className="album-art"
                  />
                </a>
                <div>
                  <div className="flex flex-col">
                    <a
                      href={result.songUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="song-title">
                        {truncateString(result.title, 20)}
                      </p>
                    </a>
                    <p>{truncateString(result.artist, 20)}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SpotifyLastPlayed;
