import Vitsi from '../components/Vitsi';
import './App.css';
import vitsitData from '../components/vitsitData';


// function App() {

//   return (
//     <>
//       <Vitsi
//       kysymys="A got my daughter a fridge for her birthday."
//       vastaus="I can't wait to see her face light up when she open it."
//       />
//       <Vitsi
//       kysymys="How did the hacker escape the police?"
//       vastaus="He just ran somewhere"
//       />
//       <Vitsi
//       kysymys="Why don't pirated travel on mountain roads?"
//       vastaus="Scurvy"
//       />
//       <Vitsi
//       kysymys="Why do bees stay in the hive in the winter?"
//       vastaus="Swarm."
//       />
//       <Vitsi
//       kysymys="What's the best thing about Switzerland?"
//       vastaus="I don't know, but the flag is a ig plus!"
//       />
//       </>
//   )
// }

function App() {
    const vitsiElementit = vitsitData.map(vitsi => {
      return <Vitsi kysymys={vitsi.kysymys} vastaus={vitsi.vastaus}/>
    })
  return (
    <div className='main'>
      {vitsiElementit}
    </div>
  );
  }

export default App;
