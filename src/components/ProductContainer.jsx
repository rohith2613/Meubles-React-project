import React, { useState } from 'react'
import ProductsGrid from './ProductsGrid'
import ProductList from './ProductList'
import { useLoaderData } from 'react-router-dom'
import { BsFillGridFill, BsList } from 'react-icons/bs';


const ProductContainer = () => {
  const { meta } = useLoaderData();
  console.log(meta);
  const totalProducts = meta?.pagination?.total || 0;  // Add null-checks here
  const [layout, setLayout] = useState('grid');

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-base-content'
    }`;
  };

  return (
    <>
      {/* HEADER */}
      <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
        <h4 className='font-medium text-md'>
          {totalProducts} product{totalProducts !== 1 && 's'} {/* Adjusted condition */}
        </h4>
        <div className='flex gap-x-2'>
          <button
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductList />
        )}
      </div>
    </>
  );
};

export default ProductContainer;
