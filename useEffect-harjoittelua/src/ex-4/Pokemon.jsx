// import { useState, useEffect } from 'react';

// const Pokemon = () => {
//     const [kuva, setKuva] = useState("");
//     const [nimi, setNimi] = useState("");

//     useEffect(() => {
//         async function getPokemon() {
//             const response = await fetch('https://pokeapi.co/api/v2/pokemon/mankey');
//             const json = await response.json();
//             console.log(json);
//             const imgURL = json.sprites.other["official-artwork"].front_default;
//             setKuva(imgURL);
//             setNimi(json.name);
//         }
//         getPokemon();
//     }, []);

//     return (
//         <div>
//             <h1>{nimi}</h1>
//             <img src={kuva} alt="Pokemon kuva" />
//         </div>
//     );
// };

// export default Pokemon;


import  useFetch  from './useFetch.jsx';

const Pokemon = ({name}) => {
    const {kuva_front, kuva_back, nimi, height, id} = useFetch('https://pokeapi.co/api/v2/pokemon/'+name);
    
    return (
        <div>
            <h1>{nimi}</h1>
            <h2>Kasvot</h2>
            <img src={kuva_front} alt="Pokemon's front pic" />
            <h2>Peppu</h2>
            <img src={kuva_back} alt="Pokemon's back pic" />
            <h2>Height: {height}</h2>
            <h2>ID: {id}</h2>
        </div>
    );
};

export default Pokemon;