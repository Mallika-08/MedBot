import { Link } from 'react-router-dom';
import UserRightBar from '../components/UserRightBar/UserRightBar.js';
import User from './User.jsx';

function Login(){
    return(
        <>
            <h1>Login page</h1>
            <Link to="/User"><button>Click</button></Link>
        </>
    );
}
export default Login;