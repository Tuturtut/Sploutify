import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import SpotifyWebApi from 'spotify-web-api-js';

function App() {
  const spotifyApi = new SpotifyWebApi();
  const [logged, setLogged] = useState(false);
  const [userInfo, setUserInfo] = useState(null); // Pour stocker les informations de l'utilisateur

  const loginInfo = {
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    // redirect url in env + callback at the end
    redirectUri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI + '/callback',
  };


  console.log(loginInfo.redirectUri);

  useEffect(() => {
    // Cette fonction sera exécutée lors du chargement initial du composant
    // Elle vérifie si l'URL actuelle contient un jeton d'accès Spotify
    const handleAccessToken = () => {
      const hash = window.location.hash.substring(1);
      const tokenParams = new URLSearchParams(hash);
      const accessToken = tokenParams.get('access_token');

      if (accessToken) {
        // Si un jeton d'accès est présent dans l'URL
        // Configurez l'API Spotify avec le jeton d'accès
        spotifyApi.setAccessToken(accessToken);
        // Mettez à jour l'état de connexion
        setLogged(true);

        // Obtenez les informations de l'utilisateur connecté
        spotifyApi.getMe().then((data) => {
          console.log('Informations de l\'utilisateur :', data);
          setUserInfo(data); // Stockez les informations de l'utilisateur dans l'état
        });
      }
    };

    handleAccessToken(); // Appelez la fonction pour vérifier le jeton d'accès au chargement initial
  }, []);

  const handleLogin = () => {
    // Redirigez l'utilisateur vers la page d'authentification Spotify
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${loginInfo.clientId}&redirect_uri=${loginInfo.redirectUri}&response_type=token`;
  };

  const handleLogout = () => {
    // Réinitialisez le jeton d'accès Spotify
    spotifyApi.setAccessToken(null);

    // Mettez à jour l'état de connexion
    setLogged(false);
    setUserInfo(null); // Réinitialisez les informations de l'utilisateur
  };

  return (
    <div className='font-gotham-black bg-dark-gray m-10 p-10 rounded-lg text-white'>
      {logged ? (
        <>
          <Logout onLogout={handleLogout} />
          {userInfo && (
            <div>
              <h2>Informations de l'utilisateur :</h2>
              <p>Nom d'utilisateur : {userInfo.display_name}</p>
            </div>
          )}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
