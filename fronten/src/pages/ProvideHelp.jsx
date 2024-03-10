import { useEffect } from 'react';


function ProvideHelp(){
    const redirectToExternalSite = () => {
        window.location.href = 'http://localhost:5000/ProvideHelp';
    };

    useEffect(() => {
        redirectToExternalSite();
    }, []); 

    return null;
}
export default ProvideHelp;