const Button = ({painikeTeksti, kasittelePainallus}) => {
    return <button onClick={kasittelePainallus}>{painikeTeksti}</button>;
}
 
export default Button;