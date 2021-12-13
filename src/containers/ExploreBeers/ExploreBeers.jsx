import React ,  { useState, useEffect } from 'react'

import SearchBox from "../../components/SearchBox/SearchBox";
import BeerTiles from "../../components/BeerTiles/BeerTiles";
import beers from '../../data/beerlist';

const ExploreBeers = props => {
  
  // const   beersSearch  =   props  ;
  
  // console.log("ExploreBeers Received as props " , props);

  // console.log("After assigning props to beersArr " , beersSearch );
  // const [searchTerm, setSearchTerm] = useState("");

  // console.log(beers);


  //  const filteredBeers = beers.filter(beer => {
  //     const beerTitleLower = beer.name.toLowerCase();

  //     if (beerTitleLower.includes(searchTerm)){
  //       console.log("Happy");
  //     }
  //     const search = beerTitleLower.filter(beerLower =>
  //        beerTitleLower.includes(searchTerm)
  
  //     console.log("Beer Title ", search);
  //     return beerTitleLower.includes(searchTerm) && beer.name;
  //   });
       
 
  // const filteredBeers = beers.filter((beer) => (
  //   const beerTitleLower = beer.name.toLowerCase();
      
    

    // console.log("Beer Title ", filteredBeers );

    // const filteredAlbums = albumsArr.filter(album => {
    //   const albumTitleLower = album.strAlbum.toLowerCase();
  
    //   return albumTitleLower.includes(searchTerm) && album.strAlbumThumb;
    // });
    
    // const filteredBeersList = beers.name;

    // return beerTitleLower.includes(searchTerm) && beer.image_url;
    // console.log("Beer Title " , filteredBeersList);


  return (
    <>
      {/* <SearchBox label={"beers"} searchTerm={searchTerm} handleInput={handleInput} /> */}
        {/* <BeerTiles title={"Results"} beersArr={filteredBeers} /> */}
    </>
  );
};

export default ExploreBeers;
