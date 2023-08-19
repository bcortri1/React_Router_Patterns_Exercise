import React from "react";
import "./Color.css";
import { Link, Navigate, useParams } from "react-router-dom";

const Color = ({ grabColor }) => {
    const { color } = useParams();
    try {
        const { name, value } = grabColor(color);
        return <div className="Color" style={{ backgroundColor: value }}>
        <h1>{name}</h1>
        <Link to="/colors">Back?</Link>
    </div>;
    }
    catch{
        return <Navigate to="/colors" />
    }
}

export default Color;