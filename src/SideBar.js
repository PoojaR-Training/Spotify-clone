import React from 'react';
import './SideBar.css';
import SideBarOptions from './SideBarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
import {Link} from 'react-router-dom';

const SideBar = ({sideBar, setSideBar, smallScreen, setPlaylist}) => {
    const [{ playlists }, dispatch] = useDataLayerValue();

    const handleClick = () => {
        if(!smallScreen) return

        setSideBar(!sideBar)
    }
    
    return (
       <div className={sideBar?"SideBar-active":"SideBar"} onClick={()=>handleClick()}>
            <img className="sidebarLogo" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="spotify-logo"/>
            <Link to='/' style={{textDecoration:"none"}}>
            <SideBarOptions Icon={HomeIcon} id={'37i9dQZEVXbNG2KDcFcKOF'} setPlaylist={setPlaylist} title="Home" />
            </Link>
            <Link to='/search' style={{textDecoration:"none"}}>
            <SideBarOptions Icon={SearchIcon} title="Search" />
            </Link>
            <SideBarOptions Icon={LibraryMusicIcon} title="Your Library" />

            <br/>
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />
            <Link to='/' style={{textDecoration:"none"}}>
            {playlists?.items?.map(playlist=>(
                <SideBarOptions title={playlist.name} setPlaylist={setPlaylist} id={playlist.id}/>
            ))}
            </Link>
        </div>   
    )
}

export default SideBar
