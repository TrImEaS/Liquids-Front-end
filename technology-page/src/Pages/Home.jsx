import React from 'react'
import ProductsCarousel from '../Components/ProductsCarousel'
import BannerCarousel from '../Components/BannerCarousel'
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
        <section className='flex w-3/4 justify-between gap-3 box-border flex-wrap'>
          <article className='flex flex-col items-center justify-center gap-y-2'>
            <div className='w-28 h-28 rounded-full bg-marine-100'></div>
            <p><span>Item</span></p>
          </article>

          <article className='flex flex-col items-center justify-center gap-y-2'>
            <div className='w-28 h-28 rounded-full bg-marine-100'></div>
            <p><span>Item</span></p>
          </article>

          <article className='flex flex-col items-center justify-center gap-y-2'>
            <div className='w-28 h-28 rounded-full bg-marine-100'></div>
            <p><span>Item</span></p>
          </article>

          <article className='flex flex-col items-center justify-center gap-y-2'>
            <div className='w-28 h-28 rounded-full bg-marine-100'></div>
            <p><span>Item</span></p>
          </article>

          <article className='flex flex-col items-center justify-center gap-y-2'>
            <div className='w-28 h-28 rounded-full bg-marine-100'></div>
            <p><span>Item</span></p>
          </article>

          <article className='flex flex-col items-center justify-center gap-y-2'>
            <div className='w-28 h-28 rounded-full bg-marine-100'></div>
            <p><span>Item</span></p>
          </article>

          <article className='flex flex-col items-center justify-center gap-y-2'>
            <div className='w-28 h-28 rounded-full bg-marine-100'></div>
            <p><span>Item</span></p>
          </article>
        </section>

        {/*Products carousel*/}
          <section className='w-3/4'>
           <ProductsCarousel></ProductsCarousel>
          </section>
        <div className='h-[300px] w-full bg-blue-100'></div>
        
      </div>
  )
}