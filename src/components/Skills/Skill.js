import React from 'react'
import './Skill.css'


function Skill(props) {
  return (
    <div className='container-skill'>
        <img src={props.img}></img>
    </div>
  )
}

export default Skill