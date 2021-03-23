// import SpotifyPlayer  from 'react-spotify-web-playback';
// import {useDataLayerValue} from './DataLayer';
// import React from 'react';

// const Footer = (trackUri) => {
//     const [{token}, dispatch] = useDataLayerValue();
//     console.log('helo')
//     // if(!token) return null;
//     return(
//         <SpotifyPlayer 
//             token={token}
//             showSaveIcon
//             uris={trackUri ? [trackUri]:[]} />

//     )
// }
// export default Footer

//  import './Footer.css';

// import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import ShuffleIcon from '@material-ui/icons/Shuffle';
// import RepeatIcon from '@material-ui/icons/Repeat';
// import { Grid, Slider } from '@material-ui/core';
// import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
// import VolumeDownIcon from '@material-ui/icons/VolumeDown';


//     // if(!token) return null
//     return (
        
//         // <div className="Footer">
            
//         //     {/* <div className="footer_left">
//         //         <img className="footer_albumLogo" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Masked_Wolf_-_Astronaut_in_the_Ocean.png/220px-Masked_Wolf_-_Astronaut_in_the_Ocean.png" alt="" />
//         //         <div className="footer_songInfo">
//         //             <h4>Yeah!</h4>
//         //             <p>Usher</p>
//         //         </div>

//         //     </div>
//         //     <div className="footer_center">
//         //         <ShuffleIcon className="footer_green"/>
//         //         <SkipPreviousIcon className="footer_icon"/>
//         //         <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer_icon"/>
//         //         <SkipNextIcon className="footer_icon"/>
//         //         <RepeatIcon className="footer_green"/>

//         //     </div>
//         //     <div className="footer_right">
//         //         <Grid container spacing={2}>
//         //             <Grid item>
//         //                 <PlaylistPlayIcon />
//         //             </Grid>
//         //             <Grid item>
//         //                 <VolumeDownIcon />
//         //             </Grid>
//         //             <Grid item xs>
//         //                 <Slider />
//         //             </Grid>
//         //         </Grid>
//         //     </div> */}
//         // </div>
//     )
// }

import SpotifyPlayer from "react-spotify-web-playback";
import {useDataLayerValue} from "./DataLayer";
import {useState,useEffect} from "react";
import './Footer.css';

function Footer({trackUri}){
   
    const [{token}, dispatch] = useDataLayerValue();

    const [play,setPlay] = useState(false);
    
    useEffect(()=>{
        setPlay(true);
    },[trackUri])
    
    return(
        <div className="Footer">
        <SpotifyPlayer 
        token={token}
        showSaveIcon
        callback={state=>{
            if(!state.isPlaying)setPlay(false)
        }}
        play={play}
        styles={{
            bgColor: "#282828",
            color: "#FFFFFF",
            trackNameColor: "#FFFFFF",
            trackArtistColor:"#FFFFFF",
            sliderColor:"#67b70b",
        }}
        uris={trackUri?[trackUri]:[]}
         />
         </div>
    )
}

export default Footer;

