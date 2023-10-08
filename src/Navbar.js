import 'animate.css';
import {Link} from 'react-router-dom';
import './Navbarstyles.css';



export const Navbar = () => {
    return(
        <nav className='navMenu'>
            <div className="something"><Link to="/"className="animate__animated animate__bounce" style={{ textDecoration: 'none' }}><h1>JDA</h1></Link></div>
            <Link to="/About" style={{ textDecoration: 'none' }}><h1>About</h1></Link>
            <Link to="/Projects" style={{ textDecoration: 'none' }}><h1>Projects</h1></Link>
            <Link to="/Contact" style={{ textDecoration: 'none' }}><h1>Contact</h1></Link>
            
        </nav>
    );
};

