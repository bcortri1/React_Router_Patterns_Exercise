import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';


const Navbar = ({ dogs }) => {
    return <nav className="Navbar">
        {/* You need to use 'end' to ensure navlink isn't considered active when matching further down the path*/}
        <NavLink  to="/dogs" end>Home</NavLink>
        {dogs.map((dog, index) => <NavLink key={`${dog.name}-nav-${index}`} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>)}
    </nav>
}

export default Navbar;