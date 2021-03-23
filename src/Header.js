import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import {useDataLayerValue} from './DataLayer';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({sideBar, setSideBar, smallScreen}) => {

    const [{ user }, dispatch] = useDataLayerValue();
    const toggleSideBar = () => {
        setSideBar(!sideBar)
    }
    return (
        <div className={smallScreen?"header": "header headerLarge"}>
            {!sideBar?<MenuIcon onClick={()=>toggleSideBar()}/>:''}
            
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt="AK" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
