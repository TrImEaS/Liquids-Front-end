import React, { useEffect, useState } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import ProductCard from './ProductCard'
import Slider from 'react-slick'
import products from '../Data/products.json'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function ProductsCarousel () {
  const isDevelopment = process.env.NODE_ENV === 'development'
  const basePath = isDevelopment ? '../Assets' : 'https://www.technologyline.com.ar'
  const [images, setImages] = useState([])
  
  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await fetch(`${basePath}/products-images/`)
  //       const data = await response.json()
  //       setImages(data.images)
  //       console.log(data.images)
  //     } catch (error) {
  //       console.error('Error fetching images:', error)
  //     }
  //   }
  
  //   fetchImages()
  // }, [basePath])


  const someProducts = products.slice(1, 11)


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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: false,
          prevArrow: false,
        }
      },
      {
        breakpoint: 650,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        }
      }
    ]
  }

  return(
      <Slider className='duration-200' {...settings}>
        {someProducts.map((product, index) => (
        <ProductCard
          key={product.ID}
          img={images[index] || ''}
          price={product['L. Precios C/Imp']}
          name={product.item_desc}
        ></ProductCard>
        ))}
      </Slider>
  )}

