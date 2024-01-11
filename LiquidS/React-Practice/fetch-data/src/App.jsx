import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Nav from './Nav'
import Error404 from './Components/Error404'
import Home from './Components/Home'
import Rey from './Components/Rey'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Componentes/:rey' element={<Rey></Rey>}></Route>
        <Route path='/*' element={<Error404/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
