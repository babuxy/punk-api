import React, { useState, useEffect } from 'react'
import thinking from "../../assets/images/thinking.jpg"
import ExploreBeers from "../../containers/ExploreBeers/ExploreBeers"
import SearchBox from '../SearchBox/SearchBox';


const BeerTiles = (props) => {

  console.log(props);

  const [beerDetails, setBeerDetails] = useState([]);


  const thinkingImg = thinking;

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      // .then ((json) => {console.log("Testing json" , JSON.stringify(json));}) //To display contents of fetch API
      .then(data => setBeerDetails(data))
      .catch(err => console.log(err))
  }, [])


  console.log("BeerTiles ", beerDetails);
  const beerNameAndImg = beerDetails.map((beer, index) => (

    <div className="main-grid-container">
      <div className="beer-tiles-img">
        <img src={beer.image_url} alt={beer.name} key={beer.id + (index + 1)} />
          <div className="beer-tiles-name" >{beer.name}
          </div>
      </div>
    </div>

  ));

  return (
    <>
      {beerDetails && <SearchBox beerDetails={beerDetails} beerNameAndImg={beerNameAndImg} />}
    </>
  )
}

export default BeerTiles
