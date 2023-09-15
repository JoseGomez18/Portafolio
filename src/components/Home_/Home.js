import React, { useEffect } from 'react'
import imagen from '../../Assets/perfil2.jpeg'
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import gif1 from '../../Assets/gif4-f304e6d4.gif'

import AOS from 'aos'
import 'aos/dist/aos.css'

import './Home.css'

 function Home() {
  useEffect (
    ()=> {
      AOS.init({duration:2000});
    },[])

  const f = ()=>{}
  return (
    <>
    <div id='home' className='container'>
      <section data-aos="fade-right" className='nombres'>
        <h1>I´m Jose Fernando Gomez</h1>
        <h1>Web developer</h1>

        <p>Creative and passionate frontend developer working to deliver unique and exciting solutions</p>

        <a href='../../Assets/Cv_Jose_Fernando_Gomez_Escobar_.pdf' download='Cv_Jose_Fernando_Gomez_Escobar_.pdf'>
          <Button onClick={f} className='button' variant="contained">Descargar CV</Button>
        </a>
      </section>

      <section data-aos="fade-left" className='imagen'>
        {/* <img src={gif1}></img> */}
        <img src={imagen}></img>
      </section>
      <a href='#about%20me'><ArrowDownwardIcon className='arrowIcon'></ArrowDownwardIcon></a>
    </div>
    </>
  )
}

export default Home
