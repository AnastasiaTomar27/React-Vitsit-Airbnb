import Kortti from "./Kortti";

const Profile = ({profiiliTeksti, korttiTeksti, painikeTeksti, kasittelePainallus}) => {
    return (
        <>
            <h1>{profiiliTeksti}</h1>
            <Kortti 
            korttiTeksti={korttiTeksti}
            painikeTeksti={painikeTeksti}
            kasittelePainallus={kasittelePainallus}
            />
        </>
    );
}
 
export default Profile;