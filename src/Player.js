import React from 'react';
import './Player.css';
import SideBar from './SideBar';
import Body from './Body';
// import Footer from './Footer';
import Search from './Search';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function Player({sideBar, setSideBar, smallScreen, setPlaylist}) {
    return (
        <div className="player">
            
            <div className="player_body">
                <Router>
                <SideBar setPlaylist={setPlaylist} sideBar={sideBar} setSideBar={setSideBar} smallScreen={smallScreen}/>
                <Switch>
                    <Route path='/search' component={Search} >
                        <Search sideBar={sideBar} setSideBar={setSideBar} smallScreen={smallScreen}/>
                        </Route>
                    <Route path='/' exact>
                        <Body  sideBar={sideBar} setSideBar={setSideBar} smallScreen={smallScreen}/>
                    </Route>
                </Switch>
                </Router>
            </div>
            {/* <Footer /> */}
            
        </div>
    )
}

export default Player
