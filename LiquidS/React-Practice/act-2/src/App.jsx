import React, { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [dataArray, setDataArray] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(`Error al obtener datos: ${err}`))     
  },[])

  return (
    <>
 
    </>
    
  )
}

export default App
