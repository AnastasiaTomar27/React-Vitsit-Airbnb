import {  useState, useEffect } from "react";

function Satunnainen() {
    const [laskuri, setLaskuri] = useState(0);

    useEffect(() => {
        const satunnainen = Math.floor(Math.random() * 1000);
        const paivita = setInterval(() => {
            console.log(`[${satunnainen}] - päivitys`);

        }, 3000);
        console.log(`Hello ${satunnainen}`);

        return () => {
            clearInterval(paivita);
        }
    }, [laskuri]);
        const Lisataan = () => {
            setLaskuri((prevLuku) => prevLuku + 1);
        }

    return (
        <>
            <h1>Laskuri</h1>
            <p>{laskuri}</p>
            <button onClick={Lisataan}>Paina</button>
        </>
    )
}

export default Satunnainen;