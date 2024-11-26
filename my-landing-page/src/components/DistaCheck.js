import React, { useState } from "react";
import axios from "axios";
import "./DistaCheck.css";

const DistaCheck = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(null);
  const [trainSuggestions, setTrainSuggestions] = useState([]);
  const [error, setError] = useState("");

  const handleCalculate = async () => {
    if (!source || !destination) {
      setError("Both source and destination are required.");
      return;
    }
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/calculate-distance", {
        source,
        destination,
      });

      setDistance(response.data.distance);
      setTrainSuggestions(response.data.trains || []);
    } catch (err) {
      console.error("Error fetching distance and train suggestions:", err);
      setError("Could not calculate distance. Please try again.");
    }
  };

  return (
    <div className="dista-check-container">
      <h2>Dista Check</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Enter Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      {error && <p className="error">{error}</p>}
      {distance && (
        <div className="result">
          <h3>Distance: {distance} km</h3>
          <h3>Suggested Trains:</h3>
          {trainSuggestions.length > 0 ? (
            <ul>
              {trainSuggestions.map((train, index) => (
                <li key={index}>{train}</li>
              ))}
            </ul>
          ) : (
            <p>No trains available for this route.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DistaCheck;
