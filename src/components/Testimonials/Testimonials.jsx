 import React, {useState} from 'react';
 import './Testimonials.css';
 import {testimonialsData} from '../../data/testimonialsData';
 
 function Testimonials() {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

   return (
     <div className='Testimonials'>
        <div className="left-t">
            <span>Testimonials</span>
            <span className="stroke-text">what they</span>
            <span className='say'>say about us</span>
            <span className='cmnt'>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{color: 'var(--orange)'}}>
                {testimonialsData[selected].name}
            </span>{" "}
            -{testimonialsData[selected].status}
            </span>
        </div>
 
        </div>
       
     </div>
   );
 }
 
 export default Testimonials;
 