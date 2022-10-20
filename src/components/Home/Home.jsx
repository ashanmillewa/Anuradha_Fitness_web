import React from 'react';
import './Home.css'; 
/*video eka paush karapu welawa = 31.01*/
import Header from '../Header/Header';

function Home() {
  return (
    <div className='Home'>
      <div className="left-h">
      <Header/>

      <div className="the-best-ad">
        <div></div>
        <span>the best fitness club in the town</span>
      </div>

      {/*Home heding*/}
      <div className="home-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>In here we will help you o shape and build your 
            ideal body and live up your life to fullest</span>
          </div>
      </div>

{/*figures*/}
    <div className="figures">
      <div>
        <span>+140</span>
        <span>expert coachs</span>
      </div>
      <div>
        <span>+978</span>
        <span>members joined</span>
      </div>
      <div>
        <span>+50</span>
        <span>fitness progams</span>
      </div>
    </div>


    {/*get started buttons*/}
    <div className="home-buttons">
      <div className="btn">Get Started</div>
      <div className="btn">Learn More</div>
    </div>





      </div>



      <div className="left-h">        
      </div>
      
    </div>
  );
}

export default Home;
