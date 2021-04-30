import React from 'react'
import ImgSlider from '../ImgSlider/ImgSlider';
import NewDisney from '../NewDisney/NewDisney';
import Original from '../Original/Original';
import Recommends from '../Recommends/Recommends';
import Trending from '../Trending/Trending';
import Viewers from '../Viewers/Viewers';
import './Home.css';
const Home = () => {
    return (
        <main className="home__container">
           <ImgSlider/>
           <Viewers/>
           <Recommends/>
           <NewDisney/>
           <Original/>
           <Trending/>
        </main>
    )
}

export default Home
