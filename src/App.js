import React, { useState } from 'react';
import './App.css';
import ArrayManipulation from './components/ArrayManipulation';
import AnagramDetector from './components/AnagramDetector';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [page, setPage] = useState('registration'); // Initial page is 'registration'

  const handleRegistrationSubmit = () => {
    setPage('chooseFunction'); // Move to 'chooseFunction' page after form submission
  };

  return (
    <div className="App">
      {page === 'registration' && (
        <RegistrationForm onSubmit={handleRegistrationSubmit} />
      )}
      
      {page === 'chooseFunction' && (
        <>
          <h1>Choose a Function</h1>
          <button onClick={() => setPage('anagram')}>Anagram Detector</button>
          <button onClick={() => setPage('arrayManipulation')}>Array Manipulation</button>
        </>
      )}

      {page === 'anagram' && <AnagramDetector />}
      {page === 'arrayManipulation' && <ArrayManipulation />}
    </div>
  );
}

export default App;
