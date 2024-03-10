import { useEffect } from 'react';


function GetHelp(){
    const redirectToExternalSite = () => {
        window.location.href = 'http://localhost:5000/GetHelp';
    };

    useEffect(() => {
        redirectToExternalSite();
    }, []); 

    return null;
}
export default GetHelp;