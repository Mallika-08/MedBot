import { useEffect } from 'react';

function Upload(){
    const redirectToExternalSite = () => {
        window.location.href = 'http://localhost:5000/upload';
    };

    useEffect(() => {
        redirectToExternalSite();
    }, []); 

    return null;
}
export default Upload;