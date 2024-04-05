import Ihminen from '../components/ihminen';
import ihmisetData from '../components/ihmisetData';
import './App.css'

function App() {
  const Ihmiset = ihmisetData.map(ihminen => {
    return (
      <div>
        <Ihminen
        name={ihminen.name}
        email={ihminen.email}
        address={ihminen.address}
        phone={ihminen.phone}
        website={ihminen.website}
        />
      </div>
    );
  })

  return (
    <div  className='kortit'>
      {Ihmiset}
    </div>
  );
  
}

export default App;
