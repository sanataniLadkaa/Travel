import React, { useState } from "react";
import "./Places.css";

const statesWithPlaces = {
  "Andhra Pradesh": ["Tirupati Temple", "Araku Valley", "Vishakhapatnam Beach"],
  "Arunachal Pradesh": ["Tawang Monastery", "Ziro Valley", "Sela Pass"],
  "Assam": ["Kaziranga National Park", "Kamakhya Temple", "Majuli Island"],
  "Bihar": ["Bodh Gaya", "Nalanda University", "Patna Sahib"],
  "Goa": ["Calangute Beach", "Dudhsagar Falls", "Basilica of Bom Jesus"],
  "Gujarat": ["Statue of Unity", "Gir National Park", "Rann of Kutch"],
  "Himachal Pradesh": ["Manali", "Shimla", "Dharamshala"],
  "Kerala": ["Munnar", "Alleppey", "Thekkady"],
  "Maharashtra": ["Ajanta & Ellora Caves", "Gateway of India", "Lonavala"],
  "Rajasthan": ["Jaipur", "Jaisalmer", "Udaipur"],
  "Tamil Nadu": ["Marina Beach", "Meenakshi Temple", "Kodaikanal"],
  "Uttar Pradesh": ["Taj Mahal", "Varanasi Ghats", "Lucknow Imambara"],
  "West Bengal": ["Sundarbans", "Darjeeling", "Victoria Memorial"],
};

const Places = () => {
  const [expandedState, setExpandedState] = useState(null);

  const toggleStatePlaces = (state) => {
    setExpandedState((prev) => (prev === state ? null : state));
  };

  const searchNearestHotels = (place) => {
    const query = `${place}`;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="places-container">
      <h1>Tourist Places in India</h1>
      <div className="states-grid">
        {Object.keys(statesWithPlaces).map((state, index) => (
          <div key={index} className={`state ${expandedState === state ? "expanded" : ""}`}>
            <h2 className="state-name" onClick={() => toggleStatePlaces(state)}>
              {state}
            </h2>
            <ul
              className={`places-list ${expandedState === state ? "visible" : "hidden"}`}
            >
              {statesWithPlaces[state].map((place, placeIndex) => (
                <li
                  key={placeIndex}
                  className="place-item"
                  onClick={() => searchNearestHotels(place)}
                >
                  {place}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Add the button here */}
      <button className="action-button"><a href="https://tripsuggestion.onrender.com" className="link-button">
        Click for Trip Suggestion</a>
      </button>
    </div>
  );
};

export default Places;
