import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import ColorList from './ColorList';
import Color from './Color';
import NewColorForm from './NewColorForm';



function App() {
    const initialState = JSON.parse(localStorage.getItem('colors')) || [];
    const [colors, setColors] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('colors', JSON.stringify(colors));
      }, [colors]);

    const addColor = (color) => {
        setColors((colors)=>[color,...colors]);
    }

    const grabColor = (colorName) => {
        return colors.filter((color) => color.name === colorName)[0];
    }

    return (
        <div className="App">
            <Routes>
                <Route path='/colors' element={<ColorList colors={colors} />} />
                <Route path='/colors/new' element={<NewColorForm addColor={addColor} />} />
                <Route path='/colors/:color' element={<Color grabColor={grabColor}/>} />
                <Route path='*' element={<Navigate to="/colors" />} />
            </Routes>
        </div>
    );
}

export default App;
