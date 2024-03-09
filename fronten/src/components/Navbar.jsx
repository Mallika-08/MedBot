import React from 'react';
import './navbar.css';
import Search from '../components/icons/Search.png';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Notification from '../components/icons/notification.png';

function Navbar(){
    return(
        <div className='mainNavbarContainer'>
            <div className='dashboardContainer'>
                <h2 className='dashboardText'>Dashboard</h2>
            </div>
            <div className='searchItemContainer'>
                <img src={`${Search}`} className='searchIcon'/>
                <input type='search' placeholder='Search'className='searchInput'/>
            </div>
            <div className='profileItemContainer'>
            <img src={`${Notification}`} className='notificationIcon' />
                <div className='profileItem'>
                    <img src='https://img.freepik.com/free-photo/businesswoman-posing_23-2148142829.jpg?t=st=1709657961~exp=1709661561~hmac=08b79f5ac05b4e470e33a959c8b0e070a0a64b8a6dcdc1b15cd89008ab96212c&w=360' className='profileIcon'/>
                    <p>Shivani</p>
                </div>
            </div>
        </div>
    );
}
export default Navbar;