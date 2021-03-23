import React from 'react';
import './SideBarOptions.css';

const SideBarOptions = ({ title, Icon, setPlaylist, id}) => {
    const handle = () => {
        if(title==='Search' || title==='Your Library')
        return

        setPlaylist(id);
    }
    return (
        <div className="sidebarOptions" onClick={()=>handle()}>
            {Icon && <Icon className="sidebarOption_icon" />}
            {Icon? <h4>{title}</h4>: <p>{title}</p>}
        </div>
    )
}

export default SideBarOptions
