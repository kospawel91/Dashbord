import React from 'react'
import './Navbar.scss';

import face from '../assets/face.png';
import {NotificationsNone,MailOutline,Menu,Search} from '@mui/icons-material';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="navLeft">
                    <Menu className="hamburger"/>
                    <Search className="menu"/>
                </div>
                <div className="navRight">
                    <div className="navbarIcons">
                        <NotificationsNone className="notificationIcon"/>
                        <MailOutline className="mailOutlineIcon"/>
                        <img className='faceIcon' src={face}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
