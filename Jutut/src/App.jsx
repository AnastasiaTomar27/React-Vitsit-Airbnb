import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

function App() {
  const [jutut, setJutut] = useState(["Juttu 1", "Juttu 2"]);
  
  const LisaaJuttu = () => {
    const uusiJuttu = `Juttu ${jutut.length + 1}`;
    setJutut((prevState) => [...prevState, uusiJuttu]);
  }
  
  
  const jututLista = jutut.map(juttu => {
    return(
      <span>{juttu} </span>
    );
  })


  const [isImportant, setIsImportant] = useState("Yes");
  
  const handleClick = () => {
    setIsImportant("No");
  }

  return (
    <div>
      <button onClick={LisaaJuttu}>Lisää juttu</button>
      {jututLista}

      
      <h2>Is state important to know?</h2>
      <h3  onClick={handleClick}>{isImportant}</h3>
    </div>
  );
}

export default App;
