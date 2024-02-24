import React from 'react'
import { useLoaderData ,Link } from 'react-router-dom'
import { formatPrice } from '../utils/index';

const ProductList = () => {
  const {products} = useLoaderData();
  
  return (
    <div className='mt-12 grid gap-y-6 '>
      {products.map((product)=>{
        const {title,price,image,company} = product.attributes;
        const rupeesAmount = formatPrice(price);
        return (
          <Link key={product.id} to={`/products/${product.id}`} className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group ' >
           <img className='h-24 w-24 sm:h-32 sm:w-32 object-cover group-hover:scale-110 transition duration-300' src={image} alt={title} />
           <div className='ml-0 sm:ml-16'>
            <h3 className='capitalize font-medium text-lg'>{title}</h3>
            <h4 className='capitalize text-md font-mono text-neutral text-lg'>{company}</h4>
           </div>
           <p className='font-medium ml-0 sm:ml-16 text-lg'>{rupeesAmount}</p>
          </Link>

        );

      })}
    </div>
  )
}

export default ProductList