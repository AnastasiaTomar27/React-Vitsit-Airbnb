import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sivu ei löytynyt...</h2>
            <Link to="/">Takaisin kotisivulle</Link>
        </div>
    );
}
 
export default NotFound;