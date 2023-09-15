import React from 'react'
import './Projects2.css'


function Projects2({texto,imagen,link}) {
  const imageLink = {
    backgroundImage: `url(${imagen})`
  }
  return (
    <div style={imageLink} className='card-project'>      
            <div className='container-hover'>
                <h2>{texto}</h2>
                <a href={link} target='_blank'><button>Visita la pagina</button></a>
            </div>
    </div>
  )
}

export default Projects2