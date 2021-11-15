import React from 'react'
import Home from './containers/Home/Home';
import './App.scss';
import './components/SearchBox/SearchBox.scss'
import beers from './data/beerlist'
import SearchBox from './components/SearchBox/SearchBox';
// import WallpaperDog from "./assets/images/WallpaperDog.jpg"
// import ExploreBeer from './containers/ExploreBeers/ExploreBeers';



function App() {

  // const filteredBeers = beers.filter(beer => beer.description);

  return (
    <div className="App">
      <div className="heading">
      <h1> Welcome Beer lovers and soon to become Beer lovers !!! </h1>
      </div>
   
       <div className="main-grid-container">
       <SearchBox />
       <Home />
      
        
    </div>
      </div>
  );
}

export default App
