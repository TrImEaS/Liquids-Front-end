import React from "react"
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../Assets/Carousel-images/Header-ZC-ClimaVeranoLS-V8-P1.webp'
// import banner2 from '../Assets/Carousel-images/banner2'
// import banner3 from '../Assets/Carousel-images/banner3'


const carouselImages = []

export default function BannerCarousel() {
  return (
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
        {/* {carouselImages.map(img =>(
          <div key={img.id}>
            <img 
              src={img.src} 
              alt={`img ${i}`} 
            />
          </div>  
        ))} */}
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <img src={banner1} alt="" />
        </div>
      </Carousel>
    </section>
  )
}