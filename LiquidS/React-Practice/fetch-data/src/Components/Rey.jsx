import React from 'react'
import { useParams } from 'react-router-dom'

export default function Sisebuto() {
  const {rey} = useParams()
  
  return (
    <>
    <div>
      <img src={`https://www.html6.es/img/rey_${rey}.png`}/>
      <h1>{rey}</h1>
    </div>
    </>
  )
}