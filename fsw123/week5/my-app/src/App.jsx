import React from 'react';
import './App.css';
import Giphy from './components/Giphy';



const App = () => {
  return (
    <div className='mainContainer'> 
    <div className='bubbles'>
        <span className="--i"></span>
        <span className="--i"></span>
        <span className="--i"></span>
        <span className="--i"></span>
        <span className="--i"></span>
        <span className="--i"></span>
        <span className="--i"></span>
        <span className="--i"></span>
        <span className="--i"></span>
        <span className="--i"></span>
        <span className="--i"></span>
    </div>
    <Giphy />
    </div>
  );
};

export default App