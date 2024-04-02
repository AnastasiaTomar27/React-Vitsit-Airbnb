import Navbar from '../components/Navbar';
import './App.css'
import Paasisalto from '../components/Paasisalto';
import Kortti from '../components/Kortti';
import airbnb from '../components/airbnb';

// function App() {

//   return (
//     <>
//       <Navbar />
//       <Paasisalto />
//       <div  className="kortti--tilasto">
//         <Kortti 
//         img="katie.png"
//         rating="5.0"
//         reviewCount={'6'}
//         location="USA"
//         title="Elämän ohjeita Katie Zaferesilta"
//         price={136}
//         />
//         <Kortti 
//         img="wedding-photography 1.png"
//         rating="5.0"
//         reviewCount={'30'}
//         location="USA"
//         title="Learn wedding photography"
//         price={125}
//         />
//         <Kortti 
//         img="mountain-bike 1.png"
//         rating="4.8"
//         reviewCount={'2'}
//         location="USA"
//         title="Group Mountain Biking"
//         price={50}
//         />
//       </div>
//     </>
//   );
// }

// export default App


function App() {
  const dataElementit = airbnb.map(dataElementti => {
    return (
      <Kortti
      img={dataElementti.coverImg}
      rating={dataElementti.stats.rating} 
      reviewCount={dataElementti.stats.reviewCount}
      location={dataElementti.location}
      title={dataElementti.title}
      price={dataElementti.price}
      />
    );
  })

  return (
    <>
      <Navbar />
      <Paasisalto />
      <div  className="kortti--tilasto">
        {dataElementit}
      </div>
    </>
  );
  
}

export default App
