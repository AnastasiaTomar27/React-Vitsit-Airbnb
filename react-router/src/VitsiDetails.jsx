import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from './useFetch';

const VitsiDetails = () => {
    const {id} = useParams();
    const { data: vitsi, error, isPending } = useFetch('http://localhost:8000/vitsit/' + id);
    const history = useHistory();


    const handleClick = () => {
        fetch('http://localhost:8000/vitsit/' + vitsi.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="vitsi-details">
            { isPending && <div>Ladaatan...</div> }
            { error && <div>{ error }</div> }
            { vitsi && (
                <div className="vastaus">
                    <h3>{vitsi.vastaus}</h3>
                    <img src="https://media.tenor.com/zPh3BYJNDVQAAAAM/chiens-funny-animals.gif" width="150px" height="200px" alt="funny photo" />
                    <button onClick={handleClick}>Poista vitsi</button>
                </div>
            ) }
        </div>
    );
}

export default VitsiDetails