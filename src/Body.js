import React,{useState} from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
import { Scrollbar } from "react-scrollbars-custom";
import Footer from './Footer';

const Body = ({sideBar, setSideBar, smallScreen}) => {
    const [{discover_weekly}, dispatch] = useDataLayerValue();

    const [playingTrack, setPlayingTrack] = useState();

    function chooseTrack(track){
        setPlayingTrack(track)
    }

    return (
        <div className={smallScreen?"body active":"body"}>
            <Scrollbar style={{ width: `${smallScreen?"96vw":"77.5vw"}`, height: '100vh' }}>
            <Header sideBar={sideBar} setSideBar={setSideBar} smallScreen={smallScreen}/>
            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_playBtn"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map(item =>(
                    <SongRow track={item.track} chooseTrack={chooseTrack}/>
                ))}
            </div>
            </Scrollbar>
          <Footer trackUri={playingTrack?.uri}/>
        </div>
    )
}

export default Body
