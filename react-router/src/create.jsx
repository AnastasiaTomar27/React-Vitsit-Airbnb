import {  useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [kysymys, setKysymys] = useState('');
    const [vastaus, setVastaus] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const vitsi = { kysymys, vastaus };

        setIsPending(true);

        fetch('http://localhost:8000/vitsit', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(vitsi)
        }).then(() => {
            console.log('uusi vitsi lisätty');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Lisää uusi vitsi</h2>
            <form onSubmit={handleSubmit}>
                <label>Kysymys:</label>
                <textarea
                    required
                    value={kysymys}
                    onChange={(e) => setKysymys(e.target.value)}
                ></textarea>
                <label>Vastaus:</label>
                <textarea
                    required
                    value={vastaus}
                    onChange={(e) => setVastaus(e.target.value)}
                ></textarea>
                { !isPending && <button>Lisää vitsi</button>  }
                { isPending && <button disabled>Lisätään vitsi...</button>  }
            </form>
        </div>
    );
}
 
export default Create;