import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Navbar from './Navbar';

function App(props) {
    return (
        <div className="App">
            <Navbar {...props}/>
            {/* Routes are React Router 6's Switch equivalent*/}
            <Routes>
                <Route path='/dogs' element={<DogList {...props} />} />
                <Route path='/dogs/:name' element={<DogDetails {...props} />} />
                {/* Wildcards '*' are now how you catch non matching routes*/}
                <Route path='/*' element={<Navigate to="/dogs" />} />
            </Routes>
        </div>
    );
}

App.defaultProps = {
    dogs: [
        {
            name: "Whiskey",
            age: 5,
            src: "/assets/images/whiskey.jpg",
            facts: [
                "Whiskey loves eating popcorn.",
                "Whiskey is a terrible guard dog.",
                "Whiskey wants to cuddle with you!"
            ]
        },
        {
            name: "Duke",
            age: 3,
            src: "/assets/images/duke.jpg",
            facts: [
                "Duke believes that ball is life.",
                "Duke likes snow.",
                "Duke enjoys pawing other dogs."
            ]
        },
        {
            name: "Perry",
            age: 4,
            src: "/assets/images/perry.jpg",
            facts: [
                "Perry loves all humans.",
                "Perry demolishes all snacks.",
                "Perry hates the rain."
            ]
        },
        {
            name: "Tubby",
            age: 4,
            src: "/assets/images/tubby.jpg",
            facts: [
                "Tubby is really stupid.",
                "Tubby does not like walks.",
                "Angelina used to hate Tubby, but claims not to anymore."
            ]
        }
    ]
}

export default App;
