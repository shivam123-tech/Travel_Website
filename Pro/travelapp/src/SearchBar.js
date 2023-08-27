import React, { useState, useRef } from "react";

const places = [
  "Manali",
  "Shimla",
  "Jammu & Kashmir",
  "Goa",
  "Mumbai",
  "Khajjiar",
  "Dalhousie",
  "Rajgir",
  "Assam"
];

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  const filteredPlaces = places.filter((place) =>
    place.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowDropdown(value.length > 0);
  };

  const handlePlaceClick = (place) => {
    setSearchTerm(place);
    setShowDropdown(false);
    inputRef.current.blur();
  };

  return (
    <div style={{ marginTop: "8px" }}>
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search places & activities"
        style={{
          borderRadius: "14.5px",
          border: "2px solid grey",
          backgroundColor: "lightgrey",
          width: "280px",
          height: "30px",
          paddingTop: "5px",
          paddingLeft: "80px",
          marginLeft: "200px",
          marginRight: "170px",
        }}
      />
     <div>
      {showDropdown && (
        <div className="dropdown">
          {filteredPlaces.map((place, index) => (
         <div key={index} onClick={() => handlePlaceClick(place)} style={{textAlign:"center"}}>
              
               {place}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default SearchBar;
