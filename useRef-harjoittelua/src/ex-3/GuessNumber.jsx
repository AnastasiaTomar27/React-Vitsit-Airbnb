//Minun koodi

import { useEffect, useRef, useState } from "react";

const GuessNumber = () => {
    const randomNumber = useRef(null);
    const [userNumber, setUserNumber] = useState(null);
    const [Result, setResult] = useState("")
    const [aloitetaan, setAloitetaan] = useState(0);

    useEffect(() => {
        randomNumber.current = Math.floor(Math.random() * 10);
        console.log("random ", randomNumber)
        const input = document.querySelector('input');
        input.value = "";
        setResult("")
    }, [aloitetaan]);

    function handleInputChange(e) {
        setUserNumber(e.target.value);
    }
    console.log("user number", userNumber)
    function guess() {
        console.log(typeof(userNumber), typeof(randomNumber.current))
        console.log(userNumber, randomNumber.current)
        if (userNumber > randomNumber.current) {
            setResult("Too high!");
        } else if (userNumber < randomNumber.current){
            setResult("Too low!");
        } else {
            setResult("You win!");
            setTimeout(() =>{
                alert("Aloitetaan!")
                setAloitetaan(prev => prev + 1);
            }, 1000)
        }
    }
    
    return (
        <div>
            <input 
                type="text" 
                onInput={handleInputChange}
                />
            <button onClick={guess}>Guess!</button>
            <p>{Result}</p>
        </div>
    );
}
 
export default GuessNumber;

//--------------------------------------------------
// Nader's code

// import {useEffect, useRef, useState} from 'react';

// function GuessNumber() {
//     const randomNumber = useRef(null);
//     const inputRef = useRef(null);
//     const [pText, setPText] = useState('');

//     useEffect(() => {
//         randomNumber.current = Math.floor(Math.random() * 10)
//         console.log(randomNumber);
//     }, [])

//     function handleGuess() {
//         // if (Number(inputRef.current.value) === randomNumber.current) {
//         //     console.log("You win!");
//         // }
//         console.log("difference between theese:", inputRef, inputRef.current, inputRef.current.value)
//         let {value: inputGuess} = inputRef.current;
//         inputGuess = Number(inputGuess);
//         const random = randomNumber.current;

//         if (inputGuess === random) {
//             console.log("you win!")
//             setPText("you win!")
//         } else if (inputGuess < random) {
//             console.log("you guessed too low!")
//             setPText("you guessed too low!")
//         } else {
//             console.log("you guessed too high!")
//             setPText("you guessed too high!")
//         }
//     }


//     return (
//         <div>
//             <input type="text" ref={inputRef}/>
//             <button onClick={handleGuess}>Guess!</button>
//             <p>{pText}</p>
//         </div>
//     );
// }
 
// export default GuessNumber;
