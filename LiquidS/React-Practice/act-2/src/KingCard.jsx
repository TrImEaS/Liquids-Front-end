import React, { useEffect, useState } from 'react'

function KingCard ({kingName, vComidas, tiempo}) {
  const img = `https://www.html6.es/img/rey_${kingName}.png`
  const name = kingName.toUpperCase()

  return (
    <>
    <section className='card'>
      <p><span>{name}</span> ha comido {vComidas} en sus {tiempo} años de reinado</p>
      <img src={img} alt="" /> 
    </section>
    </>
  )
}

export default KingCard