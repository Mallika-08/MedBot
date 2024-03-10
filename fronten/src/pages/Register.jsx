import { useEffect } from 'react';


function Register(){
    const redirectToExternalSite = () => {
        window.location.href = 'http://localhost:5000/register';
    };

    useEffect(() => {
        redirectToExternalSite();
    }, []); 

    return null;
}
export default Register;