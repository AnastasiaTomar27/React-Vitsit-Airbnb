import { useState } from 'react'
import './App.css'

function App() {
  const [ostoskori, setOstoskori] = useState([]);
  const [yhthinta, setYhthinta] = useState(0);
  const tuotteet_hinnat = [["Tomatti", 2.50], ["Porkkana", 1.70], ["Peruna", 0.80]];

  const tuote_hinta_lista = tuotteet_hinnat.map((item) => {
    const tuote = item[0];
    const hinta = item[1];
    
    return(
      <button onClick={() => {LisaaTuote(tuote, hinta)}}>{tuote} {hinta} €/kg</button>
    )
  })

  const LisaaTuote = (tuote, hinta) => {
    setOstoskori((prevState) => [...prevState, tuote]);
    setYhthinta(yhthinta + hinta);
   
  }
  const ostoskoriLista = ostoskori.map((tuote, id) => {
    return (
      <div>
        <p>{tuote}</p>
      </div>
    );
    
  }) 


  return (
    <div>
      <div className='background'>
        {tuote_hinta_lista}
        
      </div>
      <div className='info'>
        <div className='lista'>
          <h2>Ostoskori:</h2>
          {ostoskoriLista}
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




