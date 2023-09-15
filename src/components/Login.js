import React from 'react';

function Login({ onLogin }) {


    return (
        <div>
            <h1 className="font-gotham-bold text-white text-2xl">Connectez-vous avec Spotify</h1>
            <button onClick={onLogin} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Connexion Spotify
            </button>
        </div>
    );
}

export default Login;
