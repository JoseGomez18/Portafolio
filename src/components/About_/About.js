import React from 'react'
import './abo.css'
import gi from '../../Assets/Code typing (3).gif'

function About() {
  return (
    <>
    <div className='image-abo'>
        <img src={gi}></img>
    </div>
    <div className='about2'>
        <h1 id='titulo'>ABOUT ME</h1>
        <p>Hi, I'm Jose Fernando Gomez, I'm 18 years old.</p>
        <p>Currently I'm studying Software analysis and development at Sena, I always want to be improving my skills, I study </p>
        <p>I'm a very friendly person, I like to go out with my friends or my family in my free time</p>
    </div>
    </>
  )
}

export default About