import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home, Error, Ver, Crear, Editar } from './Routes/Routes'
import Nav from './Components/Nav'
import './App.css'

function App() {

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const setTheme = (darkModeOn) => {
      document.documentElement.classList.toggle('dark', darkModeOn)
      localStorage.setItem('theme', darkModeOn ? 'dark' : 'light')
    }
    setTheme(darkModeMediaQuery.matches)
    darkModeMediaQuery.addEventListener('change', (e) => {
      setTheme(e.matches);
    })
    
  }, []);

  return (
      <main className='flex flex-col items-center bg-slate-100 dark:bg-slate-900
        text-black font-mono dark:text-slate-50 min-h-screen font-extralight min-w-[390px]'>
        <Nav></Nav>
        <div className='h-[100px]'></div>
        <Routes>
          <Route 
            path='/' 
            element={<Home></Home>}>
          </Route>
          <Route 
            path='ver' 
            element={<Ver></Ver>}>
          </Route>
          <Route 
            path='crear' 
            element={<Crear></Crear>}>
          </Route>
          <Route 
            path='editar' 
            element={<Editar></Editar>}>
          </Route>
          <Route 
            path='*' 
            element={<Error></Error>}>
          </Route>
        </Routes>
      </main>
  )
}

export default App