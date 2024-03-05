import React from 'react'
import NavLinks from '../NavLinks'
import Logo from "./Logo"
//import { FaBars, FaTimes } from 'react-icons/fa'

export default function Nav() {

  return (
    <nav className='z-50 w-full dark:bg-slate-800 bg-slate-400 flex h-[80px] justify-between items-center px-4'>
      <Logo/>
      <section className='flex gap-x-10'> 
        <NavLinks/>
      </section>
    </nav>
  )
}