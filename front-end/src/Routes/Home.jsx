import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { NavLink } from "react-router-dom"


export default function Home() {

  return (
    <>
      <div name='home' className='w-full flex flex-col px-8 justify-center items-center h-full'>
          <div className='flex gap-5 flex-wrap justify-center sm:justify-start'>
            <NavLink to='/crear'>
              <button className='group sm:my-2 flex items-center dark:text-gray-200 border-2 border-black dark:border-slate-50 px-6 py-3 
              hover:bg-[#378d86] dark:hover:bg-cyan-500 hover:border-[#378d86] hover:dark:border-cyan-500 duration-300'>
                Armar recibos
                <span>
                  <HiArrowNarrowRight className='group-hover:rotate-90 duration-300 ml-3'></HiArrowNarrowRight>
                </span>
              </button>
            </NavLink>

            <NavLink to='/ver'>
              <button className='group sm:my-2 flex items-center dark:text-gray-200 border-2 border-black dark:border-slate-50 px-6 py-3 
              hover:bg-[#378d86] dark:hover:bg-cyan-500 hover:border-[#378d86] hover:dark:border-cyan-500 duration-300'>
                Ver recibos
                <span><HiArrowNarrowRight className='group-hover:scale-[1.4] duration-300 ml-3'></HiArrowNarrowRight></span>
              </button>
            </NavLink>

            <NavLink to='/editar'>
              <button className='group sm:my-2 flex items-center dark:text-gray-200 border-2 border-black dark:border-slate-50 px-6 py-3 
              hover:bg-[#378d86] dark:hover:bg-cyan-500 hover:border-[#378d86] hover:dark:border-cyan-500 duration-300'>
                Editar recibos
                <span><HiArrowNarrowRight className='group-hover:scale-[1.4] duration-300 ml-3'></HiArrowNarrowRight></span>
              </button>
            </NavLink>
          </div>
      </div>
    </>
  )
}