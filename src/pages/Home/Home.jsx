import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import paly_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img"/>
      </div>
      <div className="hero-caption">
        <img src={hero_title} alt=''className='caption-img'/>
        <p>Discovering has ties to a secret ancient order, a young man living in modern Instanbul embarks on a 
          quest to save the city from an immortal enimy.
        </p>
        <div className="hero-btns">
          <button className='btn'><img src={paly_icon} alt=""/>Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt=""/>More Info</button>
        </div>
        <TitleCards/>
      </div>
      <div className="more-cards">
      <TitleCards title="{Blockbuster Movies}"/>
      <TitleCards title="{Only on Netflix}"/>
      <TitleCards title="{Upcoming}"/>
      <TitleCards title="{Top Pics for you}"/>
      </div>
    </div>
  )
}

export default Home
