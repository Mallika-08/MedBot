import React from 'react'
import './sidebar.css';
import Message from '../components/icons/message.png';
import Checklist from '../components/icons/order.png';
import { Link } from 'react-router-dom';
import Settings from '../components/icons/settings.png';
import Upload from '../pages/Upload.jsx';

function Sidebar(){
    return(
        <div className='mainSidebarContainer'>
            <div>
                <ul className='ulContainer'>
                    <h3 className='menu'>Menu</h3>
                    <li className='liContainer'>
                        <img src={`${Message}`} className='sidebar-icons'></img>
                        <h4>Home</h4>
                    </li>
                    <li className='liContainer'>
                        <img src={`${Checklist}`} className='sidebar-icons'></img>
                        <h4>Statistics</h4>
                    </li>
                    <li className='liContainer'>
                        <img src={`${Message}`}className='sidebar-icons'></img>
                        <h4>Progress</h4>
                    </li>
                    <li className='liContainer'>
                        <img src={`${Checklist}`}className='sidebar-icons'></img>
                        <h4>Appointment</h4>
                    </li>
                    <li className='liContainer'>
                        <img src={`${Settings}`}className='sidebar-icons'></img>
                        <h4>Settings</h4>
                    </li>
                    
                </ul>

                <div className='eventsList'>
                    <h3 className='eventHeading'>Scheduled Events</h3>
                    <div className='eventCheckboxes'>
                        <input type='checkbox' value={"BP tablets"} />
                        <label htmlFor='BP tablets'>BP tablets</label>
                    </div>
                    <div className='eventCheckboxes'>
                        <input type='checkbox' value={"Daily exercise"} />
                        <label htmlFor='Daily exercise'>Daily exercise</label>
                    </div>
                    <div className='eventCheckboxes'>
                        <input type='checkbox' value={"Test reports"} />
                        <label htmlFor='Test reports'>Test reports</label>
                    </div>
                    <div className='eventCheckboxes'>
                        <input type='checkbox' value={"Hospital visit"} />
                        <label htmlFor='Hospital visit'>Hospital visit</label>
                    </div>
                </div>

                <div className='buttons'>
                    <div>
                        <Link to="/Upload"><button className='upload-btn'>Upload Records</button></Link>
                    </div>
                    <div>
                        <Link to="/View"><button className='view-btn'>View Records</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Sidebar;