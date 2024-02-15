import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import ProductCard from './ProductCard';

export default function ProductsCarousel () {

  const responsiveCarousel = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }  

  return(
    <div className='w-full bg-slate-400 '>
      <Carousel responsive={responsiveCarousel}>
          <ProductCard 
            price={49.99} 
            name={'Product'}>
          </ProductCard>

          <ProductCard 
            price={49.99} 
            name={'Product'}>
          </ProductCard>
          
          <ProductCard 
            price={49.99} 
            name={'Product'}>
          </ProductCard>

          <ProductCard 
            price={49.99} 
            name={'Product'}>
          </ProductCard>

          <ProductCard 
            price={49.99} 
            name={'Product'}>
          </ProductCard>
      </Carousel>
    </div>
  )
}