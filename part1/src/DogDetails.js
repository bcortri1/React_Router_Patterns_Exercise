import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import './DogDetails.css'

const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const dog = dogs.filter((dog) => dog.name.toLowerCase() === name.toLowerCase())[0];


    if (dog) {
        return <div className='DogDetails'>
            <img src={dog.src} alt={dog.name} />
            <p>{dog.name} is {dog.age} years old</p>
            <ul>
                {dog.facts.map((fact, index) => <li key={`${name}-fact-${index}`}>{fact}</li>)}
            </ul>
        </div>;
    }
    else {
        return <Navigate to="/dogs" />
    }
}

export default DogDetails;