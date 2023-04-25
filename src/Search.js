import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";
import SpotifyWebApi from "spotify-web-api-js";
import SongRow from "./SongRow";
import Footer from "./Footer";
import MenuIcon from "@material-ui/icons/Menu";

const Search = ({ sideBar, setSideBar, smallScreen }) => {
  const spotify = new SpotifyWebApi();

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
  }

  useEffect(() => {
    if (!search) return;
    let cancel = false;
    spotify.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(res.tracks.items.map((track) => track));
    });
    return () => (cancel = true);
  }, [search]);

  return (
    <div className={smallScreen ? "SearchBack active" : "SearchBack"}>
      <div className="top">
        {!sideBar ? <MenuIcon onClick={() => setSideBar(!sideBar)} /> : ""}
        <div className="header_left">
          <SearchIcon />
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for Artists, Songs, Podcasts"
            type="text"
          />
        </div>
      </div>

      <div className="searchSongs">
        {searchResults.map((track) => (
          <SongRow track={track} chooseTrack={chooseTrack} />
        ))}
      </div>
      <h3>Top Results</h3>
      <div class="card-container">
        <div class="search-card">
          <img
            src="https://res.cloudinary.com/marcomadera/image/upload/v1645938502/Spotify-Cleaner-App/Mu1_ytmhg5.jpg"
            alt="Album Cover"
          />
        </div>
        <div class="search-card">
          <img
            src="https://res.cloudinary.com/marcomadera/image/upload/v1645938502/Spotify-Cleaner-App/Mu1_ytmhg5.jpg"
            alt="Album Cover"
          />
        </div>
        <div class="search-card">
          <img
            src="https://res.cloudinary.com/marcomadera/image/upload/v1645938502/Spotify-Cleaner-App/Mu1_ytmhg5.jpg"
            alt="Album Cover"
          />
        </div>
        <div class="search-card">
          <img
            src="https://res.cloudinary.com/marcomadera/image/upload/v1645938502/Spotify-Cleaner-App/Mu1_ytmhg5.jpg"
            alt="Album Cover"
          />
        </div>
      </div>

      <Footer trackUri={playingTrack?.uri} />
    </div>
  );
};

export default Search;
