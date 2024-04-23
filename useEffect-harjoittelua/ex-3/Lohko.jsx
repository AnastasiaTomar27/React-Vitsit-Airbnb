import { useState, useEffect } from 'react';

const Lohko = () => {
    const [aika, setAika] = useState(0);
    useEffect(() => {
        console.log('Lohko on päivitetty');
    });

    useEffect(() => {
        const intervalli = setInterval(() => {
            setAika((prevAika) => prevAika + 1)
        }, 1000)

        return () => {
            clearInterval(intervalli);
        }
    }, []);
        

    return (
        <h2>Aikasi sivustolla {aika} sekuntia</h2>
    );
}
 
export default Lohko;