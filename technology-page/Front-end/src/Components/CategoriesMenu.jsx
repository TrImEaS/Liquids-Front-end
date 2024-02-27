import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import jsonproducts from '../Data/products.json'
import { FaBars } from 'react-icons/fa'


export default function CategoriesMenu () {

  const procesarDatos = (productos) => {
    const resultado = {
      categories: [],
    };
  
    productos.forEach((producto) => {
      const { category, subcategory, brand } = producto;
  
      // Verifica si la categoría ya existe en el resultado
      const categoriaExistente = resultado.categories.find(
        (cat) => cat.name === category
      )
  
      if (!categoriaExistente) {
        const nuevaCategoria = {
          name: category,
          subcategories: [],
        }
        resultado.categories.push(nuevaCategoria)
      }
  
      // Verifica si la subcategoría ya existe en la categoría
      const categoriaActual = resultado.categories.find(
        (cat) => cat.name === category
      )
      const subcategoriaExistente = categoriaActual.subcategories.find(
        (subcat) => subcat.name === subcategory
      );
  
      if (!subcategoriaExistente) {
        const nuevaSubcategoria = {
          name: subcategory,
          brands: [],
        }
        categoriaActual.subcategories.push(nuevaSubcategoria);
      }
  
      // Agrega la marca a la subcategoría
      const subcategoriaActual = categoriaActual.subcategories.find(
        (subcat) => subcat.name === subcategory
      )
      subcategoriaActual.brands.push(brand);
    })
  
    return resultado;
  }
  const [categoriesHideMenu, setCategoriesHideMenu] = useState(false)
  
  const products = procesarDatos(jsonproducts); 

  const handleClickCategories = () => setCategoriesHideMenu(!categoriesHideMenu)

  return(
    <>
    {/*Categorias hamburger*/}
      <div className='group'>
        <button 
          onClick={handleClickCategories} 
          className={`group`}
        >
          <p className={`${categoriesHideMenu ? 'bg-page-lightblue rounded-full' : ''} group flex items-center gap-x-2 px-2 py-1 pl-3 duration-300 max-md:px-3`}>
            <FaBars className='mb-[1px]'/>
            <span className="max-md:hidden">Categorías</span>
          </p>
        </button>

        {/*Categorias hide menu */}
        {categoriesHideMenu ?
          <div className='absolute flex items-center justify-center min-h-[300px] p-10 mt-[15px] z-50 max-xl:w-4/6 bg-slate-100 min-w-[300px]'>
            <section className='grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 justify-center gap-x-10 gap-y-2 text-black'>
              
              <div className='w-full h-12 col-span-3 max-xl:col-span-2 max-md:col-span-1 border-b-2 border-page-blue-dark'>
                <NavLink className={'hover:text-page-lightblue max-sm:text-xl text-2xl duration-300 font-bold'}>
                  Todos los productos
                </NavLink>
              </div>

              {products.categories.map(category => (
                <div key={category.name} >
                  {/*Mapear Categorias */}
                  <ul 
                    className='flex flex-wrap justify-between py-5'
                  >
                    <li className='hover:text-page-lightblue duration-300'>
                      <NavLink to={`/search/:${category.name.toLowerCase()}`} className={'font-semibold'}>
                        {category.name.toUpperCase()}
                      </NavLink>
                    </li>
                  </ul>

                  {/*Mapear subcategorias */}
                  <ul className='flex flex-col gap-4 flex-wrap justify-between pl-5'>
                  {category.subcategories.map(subcategory => (
                    <li 
                      key={subcategory.name} 
                      className='hover:text-page-lightblue text-xs duration-300'
                    >
                      <NavLink to={`/search/:${category.name}/${subcategory.name}`}>
                        {subcategory.name}
                      </NavLink>
                    </li>
                  ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
        : ''}
      </div>
      {/*Categorias for full screen and xl screen */}
      <section className='hidden xl:flex justify-center min-w-[530px] w-full pr-[150px]'>
        <ul className='flex'>
          {products.categories.map(category =>(
            <li key={category.name.toLowerCase()} className='hover:bg-page-lightblue rounded-full p-1 px-2 duration-300'>
              <NavLink to={`/search/:${category.name.toLowerCase()}`}>
                {category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}