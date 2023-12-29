/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Card from './card.jsx'
import './App.css'

function App () {
  return (
    <>
    <article className='card-container'>
      <Card name={'Rey1'} img={'rey_1.png'}></Card>
      <Card name={'Rey2'} img={'rey_2.png'}></Card>
      <Card name={'Rey3'} img={'rey_3.png'}></Card>
    </article>
    </>
  )
}

export default App
