
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ChooseFunction.css'; 

const ChooseFunction = () => {
  const navigate = useNavigate();

  return (
    <div className="choose-function">
      <h1>Choose a Function</h1>
      <button onClick={() => navigate('/anagram')}>Anagram Detector</button>
      <button onClick={() => navigate('/array-manipulation')}>Array Manipulation</button>
    </div>
  );
};

export default ChooseFunction;
