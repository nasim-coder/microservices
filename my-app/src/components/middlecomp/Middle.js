import React from 'react'
import './Middle.css'
const Middle = (props) => {
  return (
      <div className='middle'>
          <h1>{props.heading}</h1>
          <p>{ props.text}</p>
    </div>
  )
}

export default Middle