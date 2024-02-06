import 'animate.css';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import React from 'react';






export const Navbar = () => {

    
        

    return(
        <div className="navbar0">
            <nav id="navbar1" className='navMenu' data-visible = "false">

                <NavLink to="/" className="navbarbtn"><h1>JDA</h1></NavLink>
                <NavLink to="/About" className="navbarbtn"><h1>About</h1></NavLink>
                <NavLink to="/Blog" className="navbarbtn"><h1>Blog</h1></NavLink>
                <NavLink to="/Projects" className="navbarbtn"><h1>Projects</h1></NavLink>
                <NavLink to="/Contact" className="navbarbtn"><h1>Contact</h1></NavLink>
        
            </nav>
        </div>
    );

    
};

