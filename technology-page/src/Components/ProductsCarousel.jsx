import ProductCard from './ProductCard';
import products from '../Data/products.json'

export default function ProductsCarousel () {

  const someProducts = products.slice(1, 11);

  return(
      <div className='w-full flex gap-x-20 overflow-x-scroll overflow-y-hidden py-10'>
        {someProducts.map(product => (
          <ProductCard
            key={product.ID}
            img={product.image}
            price={product.price}
            name={product.description}
          ></ProductCard>
        ))}
      </div>)
}