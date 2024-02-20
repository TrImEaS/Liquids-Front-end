import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import ProductCard from './ProductCard'
import Slider from 'react-slick'
import products from '../Data/products.json'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function ProductsCarousel () {
  // const [loadedImages, setLoadedImages] = useState([]);
  // const END_POINT_IMAGES = 'https://github.com/TrImEaS/Technology-Line_Images/blob/main/Product-Images/'
  const someProducts = products.slice(1, 11);


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
// 1536 1280
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

  return(
      <Slider className='pr-5 ' {...settings}>
        {someProducts.map(product => (
        <ProductCard
          key={product.ID}
          img={''}
          price={product.price}
          name={product.description}
        ></ProductCard>
        ))}
      </Slider>
  )}

