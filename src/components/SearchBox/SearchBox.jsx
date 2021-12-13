// import React from "react";
import React ,  { useState, useEffect } from 'react'
import { matchSorter } from 'match-sorter';
import BeerTiles from '../BeerTiles/BeerTiles';
import ExploreBeers from '../../containers/ExploreBeers/ExploreBeers';
import beerlist from '../../data/beerlist';

import "./SearchBox.scss";

const SearchBox = props => {

  console.log(beerlist);
let beerNameAndImg = props.beerNameAndImg
console.log("After getting from BeerTiles:" , props);

   let  beersArr =   props ;
  

   if(beersArr.beerDetails.length === 0){
     console.log("Wait");
   }
  
  console.log("ExploreBeers Received as props1 " , props);
  console.log("After assigning props to beersArr " , beersArr.beerDetails );
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm);



  const handleInput = event => {
    event.preventDefault();
    const cleanInput = event.target.value.toLowerCase();
    console.log("cleanInput " , event.target.value.toLowerCase());
    setSearchTerm(cleanInput);

      };

  
  
     let filteredUser = searchTerm !== "" ? matchSorter(beersArr.beerDetails, searchTerm, { keys: ['name'] }) : beersArr.beerDetails
     console.log(filteredUser);

     const beerNameAndImgAfterFilter = filteredUser.map((beer, index) => (

      <div className="main-grid-container"> 
    

       <div className = "beer-tiles-img">    
      
           <img src={beer.image_url} alt={beer.name} key={beer.id + (index+1)} />

          <div className = "beer-tiles-name" >{beer.name} 
          </div> 
      
      </div>
      </div>
       
      //   return (beer.image_url) ;
        
    ));
console.log(beerNameAndImgAfterFilter);
       const label = "Beer Search"


  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

 
  return (
     <>
    
     
    <><form className="search-box">
          <label htmlFor={label} className="search-box__label">{capitalizedLabel}</label>
          <input type="text" name={label} value={searchTerm} onInput={handleInput} className="search-box__input" />

          <div className="check-box">
            <p> </p>


            <label htmlFor="checkboxInput_ABV">High ABV (  &gt;  6.0 )%</label>
            <input type="checkbox" value="1" id="checkboxInput_ABV" name="" />
            <p></p>


            <label htmlFor="checkboxInput_Classic_Range">Classic Range</label>
            <input type="checkbox" value="2" id="checkboxInput_Classic_Range" name="" />
            <p></p>

            <label htmlFor="checkboxInput_Acidic">Acidic ph (&lt; 4) </label>
            <input type="checkbox" value="3" id="checkboxInput_Acidic" name="" />
            <p></p>

          </div>
        </form><div>
            {beerNameAndImgAfterFilter}
          </div></>



      </>
    
  );
};

export default SearchBox;