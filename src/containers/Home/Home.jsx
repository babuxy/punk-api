import React from 'react';
import "./Home.scss";
import WallpaperDog from "../../assets/images/WallpaperDog.jpg";


const Home = () => {

    let backgroundImg = WallpaperDog;
    let altBackgroundImg = "Any time is Beer Time !!!";

    return (
        <>
        <div className="home">
        <div  className="container">
        {/* <img src={backgroundImg} className="background__img" alt={altBackgroundImg} /> */}
        <img src={backgroundImg} className="backgroundimg" alt={altBackgroundImg} />
</div>

            
        </div>
        </>
    )
}

export default Home
