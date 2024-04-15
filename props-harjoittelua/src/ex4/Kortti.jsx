import Button from "./Button";

const Kortti = ({korttiTeksti, painikeTeksti, kasittelePainallus}) => {
    return (
        <>
            <h2>{korttiTeksti}</h2>
            <Button
            kasittelePainallus={kasittelePainallus}
            painikeTeksti={painikeTeksti}
            />
        </>
    );
}
 
export default Kortti;