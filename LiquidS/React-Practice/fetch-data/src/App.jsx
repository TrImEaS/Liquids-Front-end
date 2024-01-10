import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Nav from './Nav'
import Atanagildo from './Components/Atanagildo'
import Ataulfo from './Components/Ataulfo'
import Ervigio from './Components/Ervigio'
import Leovigildo from './Components/Leovigildo'
import Recesvinto from './Components/Recesvinto'
import Sisebuto from './Components/Sisebuto'

function App() {

  return (
    <>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/Atanagildo' element={<Atanagildo/>}></Route>
        <Route path='/Ataulfo' element={<Ataulfo/>}></Route>
        <Route path='/Ervigio' element={<Ervigio/>}></Route>
        <Route path='/Leovigildo' element={<Leovigildo/>}></Route>
        <Route path='/Leogivildo' element={<Navigate to="/Leovigildo"></Navigate>}></Route>
        <Route path='/Recesvinto' element={<Recesvinto/>}></Route>
        <Route path='/Sisebuto' element={<Sisebuto/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
