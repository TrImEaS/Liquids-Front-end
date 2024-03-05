import React from "react"
import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'
import { FaMoon, FaSun } from "react-icons/fa"

export default function Logo() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const userThemePreference = localStorage.getItem('theme')
    setDarkMode(userThemePreference)
  }, [])

  const toggleDarkMode = () => setDarkMode((prevDarkMode) => !prevDarkMode)
  document.documentElement.classList.toggle('dark', darkMode)

  return (
    <>
    <section className='flex gap-6'>
      
      <div className='group w-8 h-8 bg-transparent rounded-full dark:border-white border-black border-solid border'>
        <div className='group w-9 h-8 bg-transparent rounded-full dark:border-white border-black border-solid border'>
          <NavLink 
            to='/' 
            className='flex items-center justify-center dark:text-white text-xl group-hover:animate-bounce'
            >RC
          </NavLink>
        </div>
      </div>

      <button onClick={toggleDarkMode}>
        {
          !darkMode 
          ? <FaMoon className='hover:text-slate-50 text-slate-950 text-3xl mt-0.5 hover:scale-105 duration-200'></FaMoon> 
          : <FaSun className='text-slate-50 hover:text-slate-950 text-3xl mt-0.5 hover:scale-105 duration-200'></FaSun>
        }
      </button>

    </section>
    </>
  )
}