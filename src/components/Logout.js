import React from 'react';

function Logout({ onLogout }) {
    const handleLogout = () => {
        // Effectuez les étapes nécessaires pour déconnecter l'utilisateur
        // ...

        // Appelez la fonction onLogout pour gérer la déconnexion
        onLogout();
    };

    return (
        <div>
            <h1 className="font-gotham-bold text-white text-2xl">Déconnectez-vous de Spotify</h1>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Déconnexion Spotify
            </button>
        </div>
    );
}

export default Logout;
