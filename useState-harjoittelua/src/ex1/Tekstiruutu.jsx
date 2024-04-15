import { useState } from "react";

function Tekstiruutu() {
    const [teksti, setTeksti] = useState("");

    function handleInputChange(e) {
        //console.log(e.target.value);
        setTeksti(e.target.value);
    }
    return (
        <>
            <h1>{teksti}</h1>
            <input type="text" onInput={handleInputChange}/>
        </>
    );
}

export default Tekstiruutu;