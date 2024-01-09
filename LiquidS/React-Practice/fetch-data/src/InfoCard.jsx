import React, { useEffect, useState } from 'react'
import './InfoCard.css'

function InfoCard ({ id, product, brand, category, description, price, rating, stock }) {
  const img = `https://cdn.dummyjson.com/product-images/${id}/3.jpg`

  return (
    <>
    <section className='info-card'>
      <header className='info-card-header'>
        <img src={img} alt="" />
      </header>
        <span>{product}</span>
    </section>
    </>
  )
}

export default InfoCard