// import { useEffect } from "react";

// const Fetch = () => {
//     const [kuva, setKuva] = useState("");
//     const [nimi, setNimi] = useState("");
    
//     useEffect(() => {
        
//         async function GetPokemon() {
//             const response = await fetch('https://pokeapi.co/api/v2/pokemon/mankey');
//             const json = await response.json();
//             console.log(json);
//             const imgURL = json.sprites.other["official-artwork"].front_default;
//             setKuva(imgURL);
//             setNimi(json.name);

//             getPokemon();
//         }
        
//     }, []);

//     return {kuva, nimi, GetPokemon}
// }

// export default Fetch;


import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [kuva_front, setKuva_front] = useState("");
    const [kuva_back, setKuva_back] = useState("");
    const [nimi, setNimi] = useState("");
    const [height, setHeight] = useState("");
    const [id, setId] = useState("");
    
    useEffect(() => {
        
        const GetPokemon = async function() {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            const imgURL_front = json.sprites.other["official-artwork"].front_default;
            setKuva_front(imgURL_front);
            const imgURL_back = json.sprites.other["showdown"].back_default;
            setKuva_back(imgURL_back);
            setNimi(json.name);
            setHeight(json.height);
            setId(json.id);
        }
        GetPokemon();
        
    }, []);

    return {kuva_front, kuva_back, nimi, height, id}
}

export default useFetch;