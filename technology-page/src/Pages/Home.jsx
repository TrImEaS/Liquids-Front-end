import React from 'react'
import ProductsCarousel from '../Components/ProductsCarousel';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Home() {

  const img1 = 'https://medias.musimundo.com/medias/Header-ZC-ClimaVeranoLS-V8-P1.jpg?context=bWFzdGVyfGltYWdlc3wxODc2MjZ8aW1hZ2UvanBlZ3xhRGd6TDJoaE1pOHhNRFV6TmpFM016SXdOelU0TWk5SVpXRmtaWEpmV2tOZlEyeHBiV0ZXWlhKaGJtOU1VMTlXT0Y5UU1TNXFjR2N8MjFiMDg2ZjhhYTFkNTg0OTdmZGI1MWM2ZTUzYWI5NWQ1NzZjMGU0OTE3NDIzNGY2YjYxYjFjOTkwNGY1MGNiOQ'
  const img2 = 'https://medias.musimundo.com/medias/Header-ZC0Flow-MotoSale-V1-P2.jpg?context=bWFzdGVyfGltYWdlc3wxODA4NzJ8aW1hZ2UvanBlZ3xhR1psTDJnNU9DOHhNRFV6TmpFME1UUTFOVE01TUM5SVpXRmtaWEpmV2tNd1JteHZkMTlOYjNSdlUyRnNaVjlXTVY5UU1pNXFjR2N8NzY4NmRjYTI3OGIzNGYwOGQzYjBiMjJlM2YxNDQ2NmMwYTA5NDNiYzhmOGQzYjRjMTFmMjVlMjg2M2U0OGFjNQ'

  return (
      <div name='home' className='flex flex-col items-center gap-10 min-h-screen h-full w-full'>
      {/*Carrusel/Banner*/}
        <section>
          <Carousel 
            autoPlay={3000}
            infiniteLoop
            stopOnHover
            transitionTime={500}
            showThumbs={0}
            swipeable
            emulateTouch
          >
            <div>
              <img src={img1}/>
            </div>
            <div>
              <img src={img2}/>
            </div>
            <div>
              <img src={img1}/>
            </div>
          </Carousel>
        </section>

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