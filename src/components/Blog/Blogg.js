import React from 'react'

function Blogg(props) {
  return (
    <div>
        <a href={props.link}>
            <img src={props.image}></img>
        </a>
    </div>
  )
}

export default Blogg