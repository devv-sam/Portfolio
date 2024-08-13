import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SpotifyAuth = () => {
  const [accessToken, setAccessToken] = useState(null); // values to be recieved from Spotify API
  const [recentTrack, setRecentTrack] = useState(null);

  const redirectToSpotify = () => {
    const clientId = '';
    const redirectUri = 'http://localhost:3000';
    const scopes = 'user-read-recently-played'; // Categorizes type of data sent back

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
    window.location.href = authUrl;
  };

  const fetchAccessToken = async (code) => {
    const clientId = '';
    const clientSecret = '';
    const redirectUri = 'http://localhost:3000';

    const encodedCredentials = btoa(`${clientId}:${clientSecret}`); //btoa(_) used to encode data into base64

    try { // tests for errors while code runs
      const response = await axios.post('https://accounts.spotify.com/api/token', // axio's action: creating resource
        new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: redirectUri,
        }), 
        {
          headers: {
            'Authorization': `Basic ${encodedCredentials}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      const token = response.data.access_token;
      setAccessToken(token);
      fetchRecentlyPlayed(token);
    } catch (error) { // catch runs code block if error occurs
      console.error('Error fetching access token:', error);
    }
  };

  const fetchRecentlyPlayed = async (token) => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played', { // gets auth token
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.data.items.length > 0) {
        setRecentTrack(response.data.items[0].track);
      }
    } catch (error) {
      console.error('Error fetching recently played track:', error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      fetchAccessToken(code);
    }
  }, []);

  return (
    <div>
      {accessToken ? (
        recentTrack ? (
          <div>
            <img src={recentTrack.album.images[0].url} alt={recentTrack.name} width="100" />
            <p>{recentTrack.name} by {recentTrack.artists.map(artist => artist.name).join(', ')}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <button onClick={redirectToSpotify}>Login with Spotify</button>
      )}
    </div>
  );
};

export default SpotifyAuth;
