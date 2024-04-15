import { useState } from "react";
import Button from './Button';

const Profile = () => {
    const [loggedInTeksti, setLoggedInTeksti] = useState('Logged in');
    
    return (
        <>
            <p>{loggedInTeksti}</p>
            <Button setLoggedInTeksti={setLoggedInTeksti} loggedInTeksti={loggedInTeksti}/>
        </>
    );
}
 
export default Profile;