import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

function Header() {
return (
        <div className="header">
             <div className="header_left">
                 <Avatar 
                    className="header_avartar"
                    alt="Nico Molon"
                    src=""
                 />
                 <AccessTimeIcon />
             </div>
             <div className="header_search">
                 <SearchIcon />
                 <input placeholder="Search Clever Programmer" />
             </div>
             <div className="header_right">
                 <HelpOutlineOutlinedIcon />
             </div>
        </div>
    )
}

export default Header
