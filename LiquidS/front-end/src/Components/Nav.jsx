import React from 'react'
import NavLinks from '../NavLinks'
import Logo from "./Logo"
//import { FaBars, FaTimes } from 'react-icons/fa'

export default function Nav() {

  return (
    <>
      <nav className='z-50 fixed w-full dark:bg-slate-800 bg-[#aacac7] flex h-[80px] justify-between items-center px-4'>
        <section>
          <Logo></Logo>
        </section>
        <section className='flex gap-x-10'> 
          <NavLinks></NavLinks>
        </section>
    
    </nav>
    </>
  )
}