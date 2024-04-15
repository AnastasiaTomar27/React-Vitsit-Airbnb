import { useState } from "react";

const Counter2 = () => {
    const [numero, setNumero] = useState(0);
    const handleClick = () => {
        // if (((setNumero(prevNumero => prevNumero + 1)) % 2) != 0) {
        //     setNumero(prevNumero => prevNumero + 1);
        // }

        setNumero(prevNumero => prevNumero + 1);
        setNumero(prevNumero => prevNumero + 1);

    }
    return (
        <>
            <h1>{numero}</h1>
            <button onClick={handleClick}>+</button>
        </>
    );
}
 
export default Counter2;