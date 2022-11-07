import React from 'react';
import './Join.css';


function Join() {
  return (
    <div className='Join' id='join-us'>
        <div className="left-j"> 
        <div>
          <span>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span>WITH US?</span>
        </div>
    </div>

    <div className="right-j">
      <form action="" className="email-container">
        <input type="email" name="user_email" placeholder="enter your email address" />
      </form>
    </div>
    </div>
  );
}

export default Join;
