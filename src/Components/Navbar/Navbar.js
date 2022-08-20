import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <nav className="Nav-component">
                <div className="Nav-block">
                    <Link className="Navbar-link" to="/">Poems</Link>
                </div>
                <div className="Nav-block">
                    <Link className="Navbar-link" to="/quotes">Quotes</Link>
                </div>
            </nav>
        </div>


    )
}

export default Navbar;