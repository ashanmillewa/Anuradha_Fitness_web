import React from 'react';
import './Join.css';


function Join() {
  return (
    <div className='Join' id='join-us'>
        <div className="left-j"> 
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span className='stroke-text'>YOUR BODY</span>
          <span>WITH US?</span>
        </div>
    </div>

    <div className="right-j">
      <form action="" className="email-container">
        <input type="email" name="user_email" placeholder="enter your email address" />
      <button className='btn btn-j'>Join Now</button>
      </form>
    </div>
    </div>
  );
}

export default Join;
