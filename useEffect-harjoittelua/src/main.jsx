import React from 'react'
import ReactDOM from 'react-dom/client'
import Laskuri from './ex-1/Laskuri';
import Satunnainen from './SatunnainenLuku/Satunnainen';
import Intervalli from './ex-2/Intervalli';
import Koti from './ex-3/Koti';
import Pokemon from './ex-4/Pokemon';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Satunnainen /> */}
    {<Laskuri />}
    {/* {<Intervalli />} */}
    {/* {<Koti />} */}
    {/* {<Pokemon
      name='ditto'
    />}
    <h1>Booooooooooooooooooooo!!!</h1>
    {<Pokemon
      name='mankey'
    />} */}
  </React.StrictMode>,
)
