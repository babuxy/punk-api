import React ,  { useState, useEffect } from 'react'

import SearchBox from "../../components/SearchBox/SearchBox";
import BeerTiles from "../../components/BeerTiles/BeerTiles";

const ExploreBeers = props => {
  
  const { beersArr } = props;
  
 
  console.log("ExploreBeers Received as props " , props);
  console.log("After assigning props to beersArr " , JSON.stringify(beersArr) );
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  // const filteredBeers = beersArr.filter(beer => {
  //   const beerTitleLower = beer.name.toLowerCase();

  //   console.log(beerTitleLower);
  //   return beerTitleLower
  // // .includes(searchTerm) && beer.image_url;
  // });

  return (
    <>
      {/* <SearchBox label={"beers"} searchTerm={searchTerm} handleInput={handleInput} /> */}
      {/* <BeerTiles title={"Results"} beersArr={filteredBeers} /> */}
    </>
  );
};

export default ExploreBeers;
