/* eslint-disable no-unused-vars */
import React from 'react'
import './card.css'

const card = ({ name, img }) => {
  return (
    <article className='card'>
      <img className='card-img' src={`../images/${img}`} />
      <h2 className='card-name'>{name}</h2>
    </article>
  )
}

export default card
