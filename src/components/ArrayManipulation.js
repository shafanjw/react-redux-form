
import React, { useState } from "react";
import { findPairs } from "../utils/findPairs";
import '../css/ArrayManipulation.css'; // Import the CSS file

const ArrayManipulation = () => {
  const [arrayInput, setArrayInput] = useState(""); 
  const [array, setArray] = useState([]); 
  const [target, setTarget] = useState(""); 
  const [result, setResult] = useState([]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setArray(arrayInput.split(",").map(Number));
    setResult(findPairs(array, target));
  };

  // UI rendering
  return (
    <div className="array-manipulation">
      <h3>Array Manipulation</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Array: </label>
          <input
            type="text"
            value={arrayInput}
            onChange={(e) => setArrayInput(e.target.value)}
            placeholder="Enter numbers separated by commas"
          />
        </div>
        <div>
          <label>Target: </label>
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="Enter target sum"
          />
        </div>
        <button type="submit">Find Pairs</button>
      </form>

      <h4>Resulting Pairs:</h4>
      <ul>
        {result.length > 0
          ? result.map((pair, index) => (
              <li key={index}>
                {pair[0]}, {pair[1]} because {pair[0]} + {pair[1]} = {target}
              </li>
            ))
          : "No pairs found"}
      </ul>
    </div>
  );
};

export default ArrayManipulation;
