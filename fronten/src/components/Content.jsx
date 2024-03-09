import '../index.css';
import { Link } from 'react-router-dom';
import GetHelp from '../pages/GetHelp.jsx';
import ProvideHelp from '../pages/ProvideHelp.jsx';
function Content(){
    
    return(
        <>
            <div className='content'>
                <div className='content-text'>
                    <h1>Get started today</h1>
                    <p>Find assistance, give care, get suggestions and reminders all at one place<br></br>with the help of AI and medical proffesionals </p>
                </div>
                <div className='content-btns'>
                <Link to='/GetHelp'><button className='frst-btn'>Get help</button></Link>
                <Link to='/ProvideHelp'><button className='secnd-btn'>Provide help</button></Link>
                <h3>Want to know more? <a href='#'>Join Medbot.Ai</a></h3>
                </div>
            </div>
        </>
    );
}
export default Content;