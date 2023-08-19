import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const NewColorForm = ({addColor}) => {
    const navigate = useNavigate();
    const initialState = {
        name:"",
        value: ""
    }
    const [formData, setFormData] = useState(initialState)

    const clearForm = () =>{
        setFormData((formData)=> initialState);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addColor(formData);
        clearForm();
        navigate('/colors');
        
    }

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData((formData)=>({...formData, [name]:value}));
    }


    return<form className="NewColorForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input required id="color-name" name="name" placeholder="name" type="text" onChange={handleChange} />
        <label htmlFor="value">Color:</label>
        <input required id="color-value" name="value" type="color" onChange={handleChange}/>
        <button type="submit">Add Color</button>
    </form>;
}

export default NewColorForm;