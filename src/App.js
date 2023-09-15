import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {


  const logged = false;

  const loginInfo = {
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    redirectUri: "http://localhost:3000/callback"
  }

  console.log(loginInfo.clientId)

  return (
    <div className='font-gotham-black bg-dark-gray m-10 p-10 rounded-lg text-white'>
      {logged ? <Logout /> : <Login loginInfo={loginInfo} />}
    </div >

  );
}

export default App;
