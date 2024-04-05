import { useState } from 'react'
import './App.css'

function App() {
  const [tuotteet, setLista] = useState([]);
  const [yhthinta, setYhthinta] = useState(0);
  const tuote1 = "Tomatti";
  const hinta1 = 2.50;
  const tuote2 = "Porkkana";
  const hinta2 = 1.70;
  const tuote3 = "Omena";
  const hinta3 = 2.59;

  const handleClick = (tuote, hinta) => {
    setLista((prevState) => [...prevState, tuote]);
    setYhthinta(yhthinta + hinta);
    console.log(yhthinta);
  }
  const tuotetLista = tuotteet.map(tuote => {
    return (
      <p>{tuote}</p>
    );
  }) 

  return (
    <div>
      <div className='background'>
        <button onClick={() => {handleClick(tuote1, hinta1)}}>{tuote1} {hinta1}€/kg</button>
        <button onClick={() => {handleClick(tuote2, hinta2)}}>{tuote2} {hinta2}€/kg</button>
        <button onClick={() => {handleClick(tuote3, hinta3)}}>{tuote3} {hinta3}€/kg</button>
      </div>
      <div className='info'>
        <div className='lista'>
          <h2>Ostoskori:</h2>
          {tuotetLista}
        </div>
        <div className='hinta'>
          <h2>Yhteishinta:</h2>
          {yhthinta} €
        </div>
      </div>
    </div>
  );
}

export default App
