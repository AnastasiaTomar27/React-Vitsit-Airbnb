import { useState, useEffect } from 'react';
import Lohko from './Lohko';

const Koti = () => {
    const [luku, setLuku] = useState(0);
    const kasvata = () => {
        setLuku((prevLuku) => prevLuku + 1);
    }
    useEffect(() => {
        console.log('Kotisivu on päivitetty');
    })
    return (
        <>
            <h1>Vierailuita: {luku}</h1>
            <button onClick={kasvata}>Kasvata</button>
            < Lohko/>
        </>
    );
}
 
export default Koti;