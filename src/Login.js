import React from 'react';
import './Login.css';
import {loginUrl} from './spotify.js';

function Login() {
    return (
        <div className="login">
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
