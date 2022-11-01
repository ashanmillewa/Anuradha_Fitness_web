import React,{useState} from 'react';
import './Testimonials.css';
import {testimonialsData} from '../../data/testimonialsData';

function Testimonials() {

   const [selected, setSelected] = useState(8);
   const tLength = testimonialsData.length;
  return (
    <div className='Testimonials'> 
        <div className="left-h">
        <span>Testimonials</span>   

        <span className="stroke-text">What they</span> 
        <span>say about us</span>
        <span>
            {testimonialsData[selected].review}
        </span>
        <span>
        <span style={{color:'var(--orange'}}>
                {testimonialsData[selected].name}
        </span>{" "}
        -{testimonialsData[selected].status}
  </span>
  </div>    
        <div className="right-t">
        <img src={testimonialsData[selected]} alt="" />
  </div>
    </div>
  );
}

export default Testimonials;
