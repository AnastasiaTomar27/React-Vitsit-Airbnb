import { useState } from "react";

const Lomake = () => {
    const [enimi, setEnimi] = useState('');
    const [snimi, setSnimi] = useState('');
    const [sposti, setSposti] = useState('');
    const [h1teksti, setH1teksti] = useState('');

    function handleEnimi(e) {
        setEnimi(e.target.value);
    }
    function handleSnimi(e) {
        setSnimi(e.target.value);
    }
    function handleSposti(e) {
        setSposti(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(enimi, snimi, sposti);
        setH1teksti(`Etunimi: ${enimi} Sukunimi: ${snimi} Sähköposti: ${sposti}`);
        setEnimi("");
        setSnimi("");
        setSposti("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="enimi" type="text" onInput={handleEnimi} value={enimi}/>
                <input name="snimi" type="text" onInput={handleSnimi} value={snimi}/>
                <input name="sposti" type="text" onInput={handleSposti} value={sposti}/>
                <button type="submit">Lähetä</button>
            </form>
            <h1>{h1teksti}</h1>
        </>
    );
}
 
export default Lomake;