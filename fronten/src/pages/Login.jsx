import { useEffect } from 'react';

function Login(){
    const redirectToExternalSite = () => {
        window.location.href = 'http://localhost:5000/login';
    };

    useEffect(() => {
        redirectToExternalSite();
    }, []); 

    return null;

}
export default Login;