import React from 'react';
import './Home.css';

import Header from '../Header/Header';

function Home() {
  return (
    <div className='Home'>
      <div className="left-h">
        <Header/>

    {/*the best ad*/}
      <div className="the-best-ad">
        <div></div>
        <span>the best fitness clun in the town</span>
      </div>

    {/*Home heading*/}
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



      <div className="right-h">right</div>
      
    </div>
  );
}

export default Home;
