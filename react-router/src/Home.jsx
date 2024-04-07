import Vitsi from '../components/Vitsi';
import useFetch from './useFetch';

const Home = () => {
    const { data: vitsit, isPending, error } = useFetch('http://localhost:8000/vitsit');
   
    return (
        <div className="main">
            { error && <div>{ error }</div> }
            { isPending && <div>Ladaatan...</div> }
            {vitsit && <Vitsi vitsit={vitsit} title="Vitsit:" />}
        </div>
    );
}
 
export default Home;