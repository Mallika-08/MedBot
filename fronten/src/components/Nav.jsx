import '../index.css';
import Login from '../pages/Login';
import { Link } from 'react-router-dom';

function Nav(){

    return(
        <div className="nav-section">
            <nav>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sign language</a></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register"><button>Register</button></Link></li>
            </nav>
            
        </div>
    );

}
export default Nav;