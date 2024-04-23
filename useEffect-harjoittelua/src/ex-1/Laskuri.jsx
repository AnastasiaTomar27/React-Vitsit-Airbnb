import { useState, useEffect } from 'react'
import '../App.css'

function Laskuri() {
  const [luku, setLuku] = useState(0);
  const Kasvata = () => {
    setLuku((prevLuku) => prevLuku + 1);
  }
  useEffect(() => {
    console.log('Komponentti alustettu');
  }, []);
  useEffect(() => {
    console.log('Laskurin tila muutettu');
  }, [luku]);
 return (
  <>
    <h1>{luku}</h1>
    <button onClick={Kasvata}>Paina</button>
  </>
 )
}

export default Laskuri;