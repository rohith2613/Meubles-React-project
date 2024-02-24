import React from 'react'
import { useLoaderData ,Link } from 'react-router-dom'
import { formatPrice } from '../utils/index';

const ProductsGrid = () => {
  const {products} = useLoaderData();
  
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
      {products.map((product)=>{
        const {title,price,image,company} = product.attributes;
        const rupeesAmount = formatPrice(price);
        return <Link className="card w-full shadow-xl hover:shadow-2xl transition duration-300 " key={product.id} to={`/products/${product.id}`}>
        <figure className='px-4 pt-4'>
          <img src={image} alt={title} className='rounded-xl h-64 md:h-48 w-full object-cover' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title capitalize tracking-wider'>{title}</h2>
          <h4 className='capitalize text-md font-mono text-neutral text-lg'>{company}</h4>
          <span className='text-secondary '>{rupeesAmount}</span>
        </div>
        </Link>

      })}
    </div>
  )
}

export default ProductsGrid