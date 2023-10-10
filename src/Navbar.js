import 'animate.css';
import {NavLink} from 'react-router-dom';
import './Navbarstyles.css';



export const Navbar = () => {
   


    return(
        <nav id="navbar1" className='navMenu'>
            <NavLink to="/" className="navbarbtn"><h1>JDA</h1></NavLink>
            <NavLink to="/About" className="navbarbtn"><h1>About</h1></NavLink>
            <NavLink to="/Projects" className="navbarbtn"><h1>Projects</h1></NavLink>
            <NavLink to="/Contact" className="navbarbtn"><h1>Contact</h1></NavLink>
        
        </nav>
    );
};

