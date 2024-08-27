
import React, { useState } from "react";
import { anagramDetection } from "../utils/anagramDetection";
import '../css/AnagramDetector.css'; // Import the CSS file

const AnagramDetector = () => {
  const [string1, setString1] = useState("");
  const [string2, setString2] = useState("");
  const [isAnagram, setIsAnagram] = useState(null); 

  const handleCheckAnagram = (e) => {
    e.preventDefault();
    setIsAnagram(anagramDetection(string1.toLowerCase(), string2.toLowerCase()));
  };

  return (
    <div className="anagram-detector">
      <h3>Anagram Detection</h3>
      <form onSubmit={handleCheckAnagram}>
        <div>
          <label>String 1: </label>
          <input
            type="text"
            value={string1}
            onChange={(e) => setString1(e.target.value)}
            onFocus={() => setIsAnagram(null)} 
          />
        </div>
        <div>
          <label>String 2: </label>
          <input
            type="text"
            value={string2}
            onChange={(e) => setString2(e.target.value)}
            onFocus={() => setIsAnagram(null)}
          />
        </div>
        <button type="submit">Check Anagram</button>
      </form>

      {isAnagram !== null && (
        <h4>
          The strings "{string1}" and "{string2}" are{" "}
          {isAnagram ? "anagrams!" : "not anagrams."}
        </h4>
      )}
    </div>
  );
};

export default AnagramDetector;
