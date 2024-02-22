import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import image1 from '../Assets/CategoriesCarousel-images/AURI301N_D.jpg'
import image2 from '../Assets/CategoriesCarousel-images/CEL1283.jpg'
import image3 from '../Assets/CategoriesCarousel-images/GAMA6390.jpg'
import image4 from '../Assets/CategoriesCarousel-images/LAB6B-3.jpg'
import image5 from '../Assets/CategoriesCarousel-images/LAB146.jpg'
import image6 from '../Assets/CategoriesCarousel-images/LAB535_A.jpg'
import image7 from '../Assets/CategoriesCarousel-images/PAR4299-2.jpg'
import defaultimage from '../Assets/CategoriesCarousel-images/default.webp'
export default function ProductsCarousel () {

  const NextArrow = (props) =>{
    const { onClick, style, className } = props 
    return (
        <FaAngleRight 
          onClick={onClick} 
          style={{...style, color: 'white', background: 'black', borderRadius: '100%'}} 
          className={className}
        />
    )
  }
  
  const PrevArrow = (props) =>{
    const { onClick, style, className } = props 
    return (
        <FaAngleLeft 
          onClick={onClick} 
          style={{...style, color: 'white', background: 'black', borderRadius: '100%'}} 
          className={className}
        />
    )
  }

  // nextArrow: <NextArrow/>,
  // prevArrow: <PrevArrow/>,

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return(
      <Slider {...settings}>
        <div>
          <article className='flex flex-col items-center justify-center gap-y-2'>
            <img 
              src={image1 ? image1 : defaultImage} 
              className='w-28 h-28 rounded-full border-2 shadow-lg bg-marine-100'>
            </img>
            <p><span>AURICULARES</span></p>
          </article>
        </div>
        <div>
          <article className='flex flex-col items-center justify-center gap-y-2'>
            <img 
              src={image2 ? image2 : defaultImage} 
              className='w-28 h-28 rounded-full border-2 shadow-lg bg-marine-100'>
            </img>
            <p><span>CELULARES</span></p>
          </article>
        </div>

        <div>
          <article className='flex flex-col items-center justify-center gap-y-2'>
            <img 
              src={image3 ? image3 : defaultImage} 
              className='w-28 h-28 rounded-full border-2 shadow-lg bg-marine-100'>
            </img>
            <p><span>CUIDADO PERSONAL</span></p>
          </article>
        </div>

        <div>
          <article className='flex flex-col items-center justify-center gap-y-2'>
            <img 
              src={image4 ? image4 : defaultImage} 
              className='w-28 h-28 rounded-full border-2 shadow-lg bg-marine-100'>
            </img>
            <p><span>LAVADO</span></p>
          </article>
        </div>

        <div>
          <article className='flex flex-col items-center justify-center gap-y-2'>
            <img 
              src={image5 ? image5 : defaultImage} 
              className='w-28 h-28 rounded-full border-2 shadow-lg bg-marine-100'>
            </img>
            <p><span>PEQUEÑOS ELECTRO</span></p>
          </article>
        </div>

        <div>
          <article className='flex flex-col items-center justify-center gap-y-2'>
            <img 
              src={image6 ? image6 : defaultImage} 
              className='w-28 h-28 rounded-full border-2 shadow-lg bg-marine-100'>
            </img>
            <p><span>PARLANTES</span></p>
          </article>
        </div>

        <div>
          <article className='flex flex-col items-center justify-center gap-y-2'>
            <img 
              src={image7 ? image7 : defaultImage} 
              className='w-28 h-28 rounded-full border-2 shadow-lg bg-marine-100'>
            </img>
            <p><span>VENTILADORES</span></p>
          </article>
        </div>
      </Slider>
  )}

