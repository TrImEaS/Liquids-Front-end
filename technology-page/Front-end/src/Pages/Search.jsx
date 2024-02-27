import React, { useState } from "react"
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import BannerCarousel from '../Components/BannerCarousel.jsx'
import ProductsSearch from '../Components/ProductsSearch'

export default function Search ({ history }) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [selectPrice, setSelectPrice] = useState(0)

  const categories = ['Electro', 'Informatica', 'Tecnologia', 'Mas Categorias']
  const subCategories = ['Calefaccion', 'Aires Acondicionados', 'Cuidado Personal']
  const brands = ['Bgh', 'Hitachi', 'LG', 'RCA', 'Samsung']
  const prices = [100, 1000, 2000, 10000, 100000]
  
  const handleToggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
  const handleToggleBrand = () => setIsBrandOpen(!isBrandOpen);
  const handleTogglePrice = () => setIsPriceOpen(!isPriceOpen);
  const handleSelectPrice = (e) => setSelectPrice(parseInt(e.target.value))

  return (
    <section className="flex flex-col w-3/4 py-10">
      <header className="flex w-full justify-between pb-16">
        <article className="flex items-center">
          <p>INICIO/TECNOLOGÍA/TELEVISORES</p>
        </article>

        <article className="flex gap-x-2 items-center">
          <p>ORDENAR POR ⬇️⬆️</p>
          <select 
            name="filter" 
            className="px-2 py-1 border-2 border-black rounded-lg">
            <option 
              value="default">
              Orden por defecto
            </option>
            <option 
              value="min">
              Menor precio
            </option>
            <option 
              value="max">
              Mayor precio
            </option>
          </select>
        </article>
      </header>

      <main className="flex gap-x-5 w-full h-full">
        <aside className="flex flex-col gap-y-8 w-[20%]">
          {/*Categories*/}
          <div className="flex flex-col gap-y-2 border-t border-black">
            <header className="flex justify-between items-center py-1">
              <span 
                onClick={handleToggleCategory} 
                className="font-bold cursor-pointer flex justify-between pr-1 w-full items-center">
                Categoría
                {isCategoryOpen 
                  ? <FaAngleUp/> 
                  : <FaAngleDown/>}
              </span>
            </header>

            <section className={`${isCategoryOpen ? 'hidden' : 'flex'} flex-col gap-y-2`}>
              {categories.map((categorie, index) => (
                  <span key={index}>{categorie}</span>
              ))}
              
              <span className="cursor-pointer text-page-lightblue hover:text-page-blue-normal">
                Ver mas...
              </span>
            </section>
          
          </div>

          {/*Brands*/}
          <div className="flex flex-col gap-y-2 border-t border-black">
            <header className="flex justify-between items-center py-1">
              <span 
                onClick={handleToggleBrand} 
                className="font-bold cursor-pointer flex justify-between pr-1 w-full items-center">
                Marcas
                {isBrandOpen 
                  ? <FaAngleUp/> 
                  : <FaAngleDown/>}
              </span>
            </header>

            <section className={`${isBrandOpen ? 'hidden' : 'flex'} flex-col gap-y-2`}>
              {brands.map((brand, index) => (
                <article 
                  key={index}
                  className="flex items-center gap-x-3">
                  <input 
                    id={`${brand}-checkbox`}
                    className="w-4 h-4"
                    type="checkbox"
                    value={brand}>
                  </input>
                  <label htmlFor={`${brand}-checkbox`}>{brand}</label>
                </article>
              ))}

              <span className="cursor-pointer text-page-lightblue hover:text-page-blue-normal">
                Ver mas...
              </span>
            </section>
          </div>

          {/*Prices*/}
          <div className="flex flex-col gap-y-2 border-t border-black w-full">
            <header className="flex flex-col justify-between items-center py-1 w-full">
              <span 
                onClick={handleTogglePrice} 
                className="font-bold cursor-pointer flex justify-between pr-1 w-full items-center">
                Precios
                {isPriceOpen 
                  ? <FaAngleUp/> 
                  : <FaAngleDown/>}
              </span>
            </header>

            <section className="flex flex-col justify-center items-center w-full">
              <div className="flex justify-between w-full">
                <p className="flex flex-col justify-between items-start w-full">
                  <span>Minimo</span>
                  <span>{selectPrice}</span>
                </p>
                <p className="flex flex-col justify-between items-end w-full">
                  <span>Maximo</span>
                  <span>{prices.pop()}</span>
                </p>
              </div>
              <input 
                className="w-[90%]"
                type="range" 
                min={prices[0]} 
                max={prices.pop()}
                value={selectPrice}
                onChange={handleSelectPrice}
              />
            </section>
          </div>
        </aside>

        <ProductsSearch/>

      </main>

    </section>
  )    
}