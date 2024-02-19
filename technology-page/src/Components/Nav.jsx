import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import UserIcons from './UserIcons'
import Categories from './Categories'
import { 
  FaArrowDown,
  FaBars, 
  FaSearch, 
  FaTimes
} from 'react-icons/fa'

export default function Nav() {
  const [menuNav, setMenuNav] = useState(false)
  const [categoriesMenu, setCategoriesMenu] = useState(false)
  const [keyword, setKeyword] = useState('')

  const handleClickMenuNav = () => 
    setMenuNav(!menuNav)

  const handleClickCategories = () => 
    setCategoriesMenu(!categoriesMenu)
    
  const handleChange = e => 
    setKeyword(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(keyword)
  }


  return (
    <nav className='z-50 flex flex-col w-full relative items-center'>
     
    {/*---Nav top---*/}
      <section className={`grid grid-cols-2 md:grid-cols-3 justify-between items-center h-20 w-3/4 px-2 min-w-[670px]`}>
        
      {/*Logo*/}
        <NavLink 
          className='h-[60px] flex items-center md:justify-start'
          to='/'>
          <img 
            src="/logo-realcolor-dark.png"  
            alt="company-logo"
            className='h-full w-[200px] mt-1'/>
        </NavLink>

      {/*Search input*/}
        <form 
          className='hidden md:flex gap-2 mr-2 justify-center bg-gray-300 rounded-full items-center px-2'
          onSubmit={handleSubmit}
        >
          <FaSearch/>
          <input 
            type="text" 
            className='w-full placeholder:text-gray-500 rounded-full bg-gray-300 outline-none px-3 py-1'
            placeholder='Buscar'
            onChange={handleChange}
          />
        </form>

        {/*User items*/}
        <article className='flex gap-x-6 justify-end'>
          <UserIcons/>
          <button 
            onClick={handleClickMenuNav} 
            className='md:hidden flex md:flex-col items-center gap-y-2'>
            {
              !menuNav  
                ? <FaBars className='hover:text-sky-500 duration-300 text-2xl'/>
                : <FaTimes className='hover:text-sky-500 duration-300 text-2xl'/>
            }
            <span className='text-[10px] font-semibold'></span>
          </button>
        </article>
      </section>


    
      {/*---Nav bottom Full Screen---*/}
      <section className='hidden md:flex z-50 w-full items-center justify-around gap-x-5 bg-marine-100 text-slate-50 text-[14px]'>
        <article className='w-3/4 flex h-[50px] items-center justify-around min-w-[640px]'>
          {/*Categorias*/}
          <button 
            onClick={handleClickCategories} 
            className='flex items-center gap-x-2 w-[200px] pl-3'>
            {
              !categoriesMenu
                ? <FaBars className='mb-[2.5px]'/>
                : <FaArrowDown className='mb-[2.5px]'/>
            }
            <span>Categorías</span>
          </button>

          <section className='pl-3 min-w-[530px] w-full'>
            <Categories containerStyle={'gap-x-3'}/>
          </section>
        </article>
      </section>

      {/*---Nav bottom md sm screen---*/}
      <section className='md:hidden flex h-[40px] w-full items-center justify-around gap-x-5 bg-marine-100 text-slate-50'>
        <article className='flex gap-x-3 bg-gray-300 rounded-full'>
          <form 
            className='flex items-center justify-center rounded-full text-black px-5 w-[400px]'
            onSubmit={handleSubmit}
          >
            <FaSearch/>
            <input 
              id='search'
              type="text" 
              className='w-full placeholder:text-gray-500 bg-gray-300 text-black outline-none px-3 py-1 rounded-full'
              placeholder='Buscar'
              onChange={handleChange}
            />
          </form>
        </article>
      </section>

      {/*Mobile/MD Menu*/}
      <ul className=
        {
          !menuNav
            ? 'hidden' 
            : 'absolute md:hidden text-black bg-gray-300 top-[0px] left-0 min-w-[400px] min-h-[400px] flex flex-col z-50'
        }>
      
      {/**Categorias**/}
      <section className='flex flex-col h-full'>
        <article className='w-full flex items-center justify-between gap-2 px-6 bg-marine-100 h-[70px]'>
          {/* <FaArrowDown className='mt-4 text-white text-xl animate-bounce'></FaArrowDown> */}
          <span className='text-white text-2xl font-semibold'>Categorías</span>
          <button onClick={handleClickMenuNav}>
            <FaTimes className='text-white text-2xl'/>
          </button>
          {/* <FaArrowDown className='mt-4 text-white text-xl animate-bounce'></FaArrowDown> */}
        </article>

        <article className='bg-gray-300 h-full'>
          <button className='flex items-center w-full h-[80px] pl-5 border hover:text-sky-500 border-gray-400 duration-300'>
            Todos los productos
          </button>
          <Categories
            containerStyle={'flex-col gap-y-0'}
            itemStyle={`flex last:hidden items-center w-full h-[45px] pl-10 border border-gray-400`}/>
          <button className='flex items-center w-full h-[80px] pl-5 border hover:text-sky-500 border-gray-400 duration-300'>
            Outlet
          </button>
        </article>
      </section>
    </ul>

    </nav>
  )
}