import { useState, useEffect } from 'react'
import InfoCard from './InfoCard'
import './App.css'

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    change()
  },[])

  const change = ()=>{
    fetch('https://dummyjson.com/products')
      .then(res => {
        if(!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)
        return res.json()
      })
      .then(d => d.products.map(n => 
        setProduct(e => [...e,<div className='divi' key={n.id}>{n.title}</div>])))
      .catch(e => console.log('Error fetching data:', e))
  }

  return (
    <>
    <div className='sos'>
      {product}  
    </div>
    </>
  )
}

export default App
