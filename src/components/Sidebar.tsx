import React, { Component } from 'react';
import './Sidebar.scss'
import logo from '../assets/logo.png';
export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarLogo"><img className="logo" src={logo}></img></div>
                    <div className="sidebarMenu">Menu</div>
                </div>
            </div>
        )
    }
}

export default Sidebar
