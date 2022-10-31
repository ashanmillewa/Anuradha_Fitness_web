import React from 'react';
import './Home.css';

import Header from '../Header/Header';

import home_image from "../../assets/home_image.png";
import home_image_back from "../../assets/home_image_back.png";
function Home() {
  return (
    <div className='Home'>
      <div className="left-h">
        <Header/>

  {/*e heading*/}
      <div className="home-text">
        <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span>
        </div>
        <div>
          <span>Ideal Body</span>
        </div>
        <div>
          <span>
            In here we will help you to shape and build your ideal body 
             and live up your life to fullest
          </span>
        </div>
      </div>

      {/*figures*/}
      <div className="figures">
        <div>
          <span>+140</span>
          <span>expert coaches</span>
        </div>

        <div>
          <span>+978</span>
          <span>members joined</span>
        </div>

        <div>
          <span>+50</span>
          <span>fitness programs</span>
        </div>
      </div>

      {/*home buttons*/}
      <div className="home-buttons">
        <buttons className="btn">Get Started</buttons>
        <buttons className="btn">Learn More</buttons>
      </div>

      </div>



      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={heart} alt=""/>
          <span>Heart Rate</span><span>116 bmp</span>
        </div>

{/*home image*/}
    <img src={home_image} alt="" className="home-image"/>
    <img src={home_image_back} alt="" className='home-image-back'/>

{/*calories*/}
    <div className="calories">
    <img src={calories} alt="" />

          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
