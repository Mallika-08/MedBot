import { Link } from 'react-router-dom';


function GetHelp(){
    return(
        <>
            <h1>Get help page</h1>
            <Link to="/User"><button>Click</button></Link>
        </>
    );
}
export default GetHelp;