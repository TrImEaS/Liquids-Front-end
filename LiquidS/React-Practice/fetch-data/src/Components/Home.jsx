import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const list = ['atanagildo', 'ervigio', 'sisebuto', 'ataulfo', 'leovigildo', 'recesvinto']

  return (
    <>
    <div className='reyes'>
      {
        list.map(rey => 
          <Link to={`/Componentes/${rey}`}><img src={`https://www.html6.es/img/rey_${rey}.png`}></img></Link>)
      }
    </div>
    </>
  )
}