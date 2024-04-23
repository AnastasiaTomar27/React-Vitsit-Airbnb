import { useState, useEffect } from 'react';

const Intervalli = () => {
    const [luku, setLuku] = useState(0);
    const Kasvata = () => {
        setLuku((prevLuku) => prevLuku + 1);
    }
    useEffect(() => {
        const Interval = setInterval(() => {
            console.log('Intervallista terveisiä');  
        }, 1000);
        return () => {clearInterval(Interval)}
    }, []);
    
    return (
        <>
            <h1>{luku}</h1>
            <button onClick={Kasvata}>Kasvata</button>
        </>
    );
}
 
export default Intervalli;