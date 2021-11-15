import React from 'react';
import "./Home.scss";
import "../../components/BeerTiles/BeerTiles.scss"
import WallpaperDog from "../../assets/images/WallpaperDog.jpg";
import BeerTiles from '../../components/BeerTiles/BeerTiles';


const Home = () => {
    // const { unsortedBeers } = props;

    let backgroundImg = WallpaperDog;
    let altBackgroundImg = "Any time is Beer Time !!!";
    

    return (
        <>
        {/* <div style="background-image: {backgroundImg};"></div> */}
        <div className="home">

        
  
            <BeerTiles title="Beers" />
     

            
        </div>
        </>
    )
}

export default Home
