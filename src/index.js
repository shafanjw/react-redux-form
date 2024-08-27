import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import FormSummary from './pages/FormSummary'; 
import ArrayManipulation from './components/ArrayManipulation';
import AnagramDetector from './components/AnagramDetector';
import ChooseFunction from './pages/ChooseFunction';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RegistrationForm />} />
      <Route path="/form-summary" element={<FormSummary />} />
      <Route path="/choose-function" element={<ChooseFunction />} />
      <Route path="/anagram" element={<AnagramDetector />} /> {/* Ensure these routes exist */}
      <Route path="/array-manipulation" element={<ArrayManipulation />} />
    </Routes>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
