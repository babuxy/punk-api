import React from "react";

import "./SearchBox.scss";

const SearchBox = props => {
  const { label, searchTerm, handleInput } = props;

  console.log("SearchBox Received as props " , label);
  // const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <form className="search-box">
      {/* <label htmlFor={label} className="search-box__label">{capitalizedLabel}</label> */}
      <input type="text" name={label} value={searchTerm} onInput={handleInput} className="search-box__input"/>
    
    <div className = "check-box">
     <p> </p>

     
     <label htmlFor="checkboxInput_ABV">High ABV (  &gt;  6.0 )%</label>
     <input type="checkbox" value="1" id="checkboxInput_ABV" name="" />
     <p></p>


     <label htmlFor="checkboxInput_Classic_Range">Classic Range</label>
     <input type="checkbox" value="2" id="checkboxInput_Classic_Range" name="" />
     <p></p>

     <label htmlFor="checkboxInput_Acidic">Acidic ph ( &lt; 4 ) </label>
     <input type="checkbox" value="3" id="checkboxInput_Acidic" name="" />
     <p></p>

     </div>


     </form>
  );
};

export default SearchBox;