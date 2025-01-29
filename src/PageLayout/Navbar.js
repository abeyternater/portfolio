import 'animate.css';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';




export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
        
    

    return(
        <div>
        
             
            <div className="navbar0">
                <FontAwesomeIcon className="burgCon" size="2xl" icon={faBars} onClick={toggleMenu} />
                <nav className={`navMenu slide-out-nav ${isOpen ? 'open' : ''}`}>
                    <NavLink to="/" className="navbarbtn" onClick={toggleMenu}><h1>JDA</h1></NavLink >
                    <NavLink to="/Projects" className="navbarbtn" onClick={toggleMenu}><h1>Projects</h1></NavLink>
                    <NavLink to="/Contact" className="navbarbtn" onClick={toggleMenu}><h1>Contact</h1></NavLink>
        
                </nav>
            </div>
        </div>
    );

    
};

