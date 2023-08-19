import React from "react";
import { NavLink } from "react-router-dom";
import './ColorList.css';


const ColorList = ({colors}) => {
    return <>   
            <div className="AddColor">
                <p>Welcome to the color factory.</p>
                <NavLink  to="/colors/new" end>Add a color</NavLink>
            </div>
            <div className="ColorList">
                <p>Please select a color.</p>
                {colors.map((color, index) => <NavLink key={`${color.name}-nav-${index}`} to={`/colors/${color.name}`}>{color.name}</NavLink>)}
            </div>
    </>
}

export default ColorList;