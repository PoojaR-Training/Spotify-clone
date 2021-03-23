import './App.css';
import Login from './Login';
import React, {useState,useEffect} from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const spotify = new SpotifyWebApi(); // creates a instance of spotifyWebApi

function App() {
  const smallScreen = useMediaQuery('(max-width: 600px)');

  const [sideBar,setSideBar] = useState(!smallScreen);

  const [playlist, setPlaylist] = useState('37i9dQZEVXbNG2KDcFcKOF');
  
  useEffect(()=>{
    setSideBar(!smallScreen)
  },[smallScreen])

  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user)=>{
        dispatch({
          type: "SET_USER",
          user //shorthand for user: user cause dipatch has same property name
        })
      })

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
      
    }
  },[])
  useEffect(()=>{
    spotify.getPlaylist(playlist).then(response => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    })
  },[playlist]);

  return (
    <div className="App">
     
     {token?<Player setPlaylist={setPlaylist} sideBar={sideBar} setSideBar={setSideBar} smallScreen={smallScreen}/>:<Login />}
    </div>
  );
}

export default App;
