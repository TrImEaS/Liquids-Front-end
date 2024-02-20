import React from 'react'
import ProductsCarousel from '../Components/ProductsCarousel'
import BannerCarousel from '../Components/BannerCarousel'
import CategoriesCarousel from '../Components/CategoriesCarousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function Home() {

  return (
      <div name='home' className='flex flex-col items-center gap-10 min-h-screen h-full w-full'>
     
        {/*Carrusel/Banner*/}
        <BannerCarousel/>

        {/*Banners*/}
        <section className='flex flex-col items-center w-full gap-y-10'>
          <div className='grid grid-cols-3 gap-x-10 w-3/4'>
            <article className='flex items-center justify-center w-full h-[200px] rounded-3xl bg-marine-100 text-4xl text-white'>SMART TV</article>
            <article className='flex items-center justify-center w-full h-[200px] rounded-3xl bg-marine-100 text-4xl text-white'>HELADERAS</article>
            <article className='flex items-center justify-center w-full h-[200px] rounded-3xl bg-marine-100 text-4xl text-white'>CELULARES</article>
          </div>

          <div className='flex items-center justify-around w-10/12 h-[70px] rounded-sm bg-marine-100 text-white'>
            <span>Envíos a domicilio</span>
            <span>Pagos en creditos y débitos</span>
            <span>Centro de preguntas</span>
          </div>
        </section>

        {/*Categories*/}
        <section className='w-4/5'>
          <CategoriesCarousel/>
        </section>

        {/*Products sale carousel*/}
        <section className='w-3/4'>
          <h1 className='font-bold text-3xl'>
            OFERTAS
          </h1>
          <ProductsCarousel/>
        </section>

        {/*Products news carousel*/}
        <section className='w-3/4'>
          <h1 className='font-bold text-3xl'>
            NOVEDADES
          </h1>
          <ProductsCarousel/>
        </section>

        {/*Products recomendations carousel*/}
        <section className='w-3/4'>
          <h1 className='font-bold text-3xl'>
            TE RECOMENDAMOS
          </h1>
          <ProductsCarousel/>
        </section>
        
      </div>
  )
}