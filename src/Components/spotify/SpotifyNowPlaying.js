import React, { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyAPI";
import SpotifyLogo from "./SpotifyLogo";
import PlayingAnimation from "./SpotifyPlayingAnimation";

const SpotifyNowPlaying = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      setResult(results[0]);
      setLoading(false);
    });
  });

  return (
    <div className="box">
      {loading ? (
        <div>
          <div></div>
        </div>
      ) : (
        <div>
          <div className="flex-gap-10">
            <SpotifyLogo />
            <p>{result.isPlaying ? "Now playing" : "Currently offline"}</p>
            {result.isPlaying && <PlayingAnimation />}
          </div>
          {result.isPlaying && (
            <div>
              <div>
                <img
                  alt={`${result.title} album art`}
                  src={result.albumImageUrl}
                />
                <div>
                  <a href={result.songUrl} target="_blank">
                    <p>{result.title}</p>
                  </a>
                  <p>{result.artist}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SpotifyNowPlaying;

// const Center = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
