import React, { useEffect } from 'react'
import './App.css';

import Navbar from './components/NavBar/Navbar';
import Home from './components/Home_/Home';
import Ski from './components/Skills/Skill'
import Projects2 from './components/Projects_2/Projects2';
import About from './components/About_/About'

import AOS from 'aos'
import 'aos/dist/aos.css'

import htmlImg from './Assets/html.png'
import cssImg from './Assets/css.png'
import jsImg from './Assets/js.png'
import reactImg from './Assets/react.png'
import gitImg from './Assets/git.png'
import worpImg from './Assets/wordpress.png'
import javaImg from './Assets/icons8-logotipo-de-java-coffee-cup-244.png'
import mysqlImg from './Assets/icons8-logo-de-mysql-244.png'



function App() {
  useEffect (
    ()=> {
      AOS.init({duration:2000});
    },[])

  return (
    <div className="App">
      <Navbar/>
      
      <Home/>

      <section data-aos="fade-right"  className='aboutt' id='about%20me'>
        <About/>
      </section>

      <section data-aos="fade-right" id='skills'>
        <h1 >SKILLS</h1>
        <div className='skills'>
          <Ski img={htmlImg}/>
          <Ski img={cssImg}/>
          <Ski img={jsImg}/>
          <Ski img={reactImg}/>
          <Ski img={mysqlImg}/>
          <Ski img={gitImg}/>
          <Ski img={javaImg}/>
          <Ski img={worpImg}/>
        </div>
      </section>

      <section data-aos="fade-right" className='cards-container' id='projects'>
        <h1 >PROJECTS</h1>
        <div className='projects-container'>
          <Projects2
            imagen={require('./Assets/habitanteSiete.png')} 
            texto={'Habitante siete es una pagina web de un periodico virtual de Robledo. Hecha en WordPress'}
            link={'https://www.habitantesiete.com/'}
          />
          <Projects2 
            imagen={require('./Assets/galacticX.png')} 
            texto={'GalacticX es una pagina de servicios espaciales. Hecha con JS,HTML,CSS'}
            link={'https://galacticx.netlify.app/'}
            />
          <Projects2 
            imagen={require('./Assets/spartan.png')}
            texto={'Spartan es una pagina para una empresa internacional de productos de limpiez'}
            link={'https://www.spartancolombia.com/'}
           />
          <Projects2
            imagen={require('./Assets/carpas.png')} 
            texto={'CarpasSamfer es una empresa que cuenta con todo tipo de carpas'}
            link={'https://www.carpassamfer.com/'}
          />
          <Projects2 
            imagen={require('./Assets/ccpc.png')}
            texto={'Página del Consejo Comunal de Planeación Comuna 7 Robledo'}
            link={'https://ccpc7.org/'}
            />
          <Projects2 
            imagen={require('./Assets/asocumnal.png')} 
            texto={'Página de la Asociación de juntas de Acción comunal-Comuna 7 Robledo'}
            link={'https://asocomunal7.com/'}
            />
        </div>
      </section>
      
    </div>
  );
}

export default App;
