import React from 'react';
import './SongRow.css';
import {useDataLayerValue} from './DataLayer';

const SongRow = ({track, chooseTrack}) => {
    const [{user}, dispatch] = useDataLayerValue();
    const handle = () => {
       /* if(user?.product==='open' || user?.product==='free') {
            alert('You need to have a Spotify Premium Account for this action');
            return;
        }*/
        chooseTrack(track);
    }
    return (
        <div className="songRow" onClick={()=>handle()}>
            <img src={track.album.images[0].url} alt="img" />
            <div className="songRow_info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map(artist => artist.name).join(", ")}-{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
