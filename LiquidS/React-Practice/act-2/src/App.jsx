/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import './App.css'
import img1 from './images/rey_sos.png'
import img2 from './images/rey_sas.png'

function App () {
  const [count, setCount] = useState(1)
  const add = () => {
    if (count === 9) { setCount(count - 9) } else setCount(count + 1)
  }

  const change = (e) => {
    if (e.target.src.includes('sas')) e.target.src = img1
    else e.target.src = img2
  }
  return (
    <>
    <div id='div' className='box'>{count}</div>
    <div onClick={change}><img src={img2} alt="" /></div>
    <button onClick={add}>ADD</button>
    </>
  )
}

export default App
