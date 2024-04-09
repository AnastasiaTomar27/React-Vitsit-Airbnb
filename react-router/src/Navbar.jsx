import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Vitsejä jokaiselle</h1>
            <div className="links">
                <Link to="/">Etusivu</Link>
                <Link to="/create">Uusi vitsi</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;