function Login(loginInfo) {
    const handleLogin = () => {
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${loginInfo.loginInfo.clientId}&redirect_uri=${loginInfo.loginInfo.redirectUri}&response_type=token`;
    };

    return (
        <div>
            <h1 className="font-gotham-bold text-white text-2xl">Connectez-vous avec Spotify</h1>
            <button onClick={handleLogin}>Connexion Spotify</button>
        </div>
    );
};


export default Login;