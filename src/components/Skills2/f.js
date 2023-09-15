import React from 'react';
import './Skills.css'


const Skill = ({ percent, text,color }) => {

  const styleProgress ={
      strokeDashoffset: (440 - (440 * percent) / 100),
      stroke: color
  }

  return (
    <div class="container-skills">
      <div class="card">
        <div class="box">
          <div class="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle className='h' style={styleProgress} cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="number">
              <h2>{percent}<span>%</span></h2>
            </div>
          </div>
          <h2 class="text">{text}</h2>
        </div>
      </div>
    </div>
  );
};


export default Skill;