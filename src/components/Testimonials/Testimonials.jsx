import React,{useState} from 'react';
import './Testimonials.css';
import {testimonialsData} from '../../data/testimonialsData';
 
            {testimonialsData[selected].review}
        </span>
        <span>
        <span style={{color:'var(--orange'}}>
                {testimonialsData[selected].name}
        </span>{" "} 
  </div>
    </div>
  );
}

export default Testimonials;
