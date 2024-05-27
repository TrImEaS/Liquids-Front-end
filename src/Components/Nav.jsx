import React from 'react'
import Logo from "./Logo"
import { NavLink, useLocation } from "react-router-dom"

export default function Nav() {
  const location = useLocation().pathname;

  return (
    <nav className='z-50 w-full bg-slate-800 flex h-[80px] justify-between items-center px-4'>
      <Logo/>
      <section className='flex gap-x-10'> 
        <NavLink 
          to='/'
          className={` ${location === '/' ? 'isActive' : ''} 
          dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 font-bold text-lg`} 
          >Home
        </NavLink>

        <NavLink 
          to='/editar'
          className={` ${location === '/editar' ? 'isActive' : ''} 
          dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 font-bold text-lg`} 
          >Preparar
        </NavLink>

        <NavLink 
          to='/imprimir'
          className={` ${location === '/imprimir' ? 'isActive' : ''} 
          dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 font-bold text-lg`} 
          >Imprimir Recibos
        </NavLink>

        <NavLink 
          to='/ver'
          className={` ${location === '/ver' ? 'isActive' : ''} 
          dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 font-bold text-lg`} 
          >Ver
        </NavLink>
      </section>
    </nav>
  )
}