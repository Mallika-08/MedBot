import { useEffect } from 'react';

function View(){
    const redirectToExternalSite = () => {
        window.location.href = 'http://localhost:5000/show';
    };

    useEffect(() => {
        redirectToExternalSite();
    }, []); 

    return null;
}
export default View;