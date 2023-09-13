import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const logged = true;

  const clientId = 'VOTRE_ID_CLIENT';
  const redirectUri = 'URL_DE_RETOUR';
  const scopes = 'user-top-read'; // Les autorisations que vous souhaitez demander à l'utilisateur

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token`;


  return (
    <div className='font-gotham-black bg-dark-gray m-10 p-10 rounded-lg'>
      {logged ? <Logout /> : <Login />}
    </div >

  );
}

export default App;
