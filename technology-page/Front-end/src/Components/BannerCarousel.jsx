import React from "react"
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../Assets/BannerCarousel-images/banner1.jpg'
import banner2 from '../Assets/BannerCarousel-images/banner2.jpg'
// import banner3 from '../Assets/BannerCarousel-images/banner3.jpg'


const carouselImages = []

export default function BannerCarousel() {
  return (
    <section>
      <Carousel 
        autoPlay={5000}
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
          <img 
            src={banner1}
            className="min-h-[100px] object-fill"
          />
        </div>
        <div>
          <img 
            src={banner2}
            className="min-h-[100px] object-fill"
          />
        </div>
        {/* <div>
          <img src={banner3} alt="" />
        </div> */}
      </Carousel>
    </section>
  )
}