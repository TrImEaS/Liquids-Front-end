import React from 'react'
import UserIcons from './UserIcons'
import Categories from './Categories'
import { FaBars, FaSearch } from 'react-icons/fa'

export default function Nav() {

  return (
    <nav className='z-50 flex flex-col w-full relative items-center'>
     
    {/*---Nav top---*/}
      <section className='grid grid-cols-3 items-center h-20 w-3/4 min-w-[600px]'>
        
      {/*Logo*/}
        <article className='h-[60px] flex items-center justify-center'>
          <img 
            src="/logo-realcolor-dark.png" 
            alt="company-logo"
            className='h-full w-[200px] mt-1'
          />
        </article>

      {/*Search input*/}
        <article className='flex gap-2 justify-center items-center px-2'>
          <FaSearch></FaSearch>
          <input 
            type="text" 
            className='w-full bg-gray-300 outline-none px-3 rounded'
          />
        </article>

        {/*User items*/}
        <article className='flex gap-x-5 justify-center'>
          <UserIcons></UserIcons>
        </article>
      </section>
    
      {/*---Nav bottom---*/}
      <section className='z-50 w-full flex items-center justify-around gap-x-5 bg-marine-100 text-slate-50'>
        <article className='w-3/4 flex h-[40px] items-center justify-around gap-x-5 bg-marine-100 text-slate-50'>

          {/*Categorias*/}
          <section className='flex items-center gap-x-4'>
            <FaBars className='mt-1 text-lg'></FaBars>
            <span>Categorías</span>
          </section>

          <section> 
            <Categories style={'text-red-500'}></Categories>
          </section>

        </article>
      </section>
    </nav>
  )
}