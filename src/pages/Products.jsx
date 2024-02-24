import React from 'react'
import { Filters, PaginationContainer, ProductContainer } from '../components';
import { customFetch } from '../utils';

const url="/products"
export const loader = async ({request})=>{
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.data;
 
  return {products,meta};
  
}

const Products = () => {
  return (
    <>
    <Filters />
    <ProductContainer />
    <PaginationContainer />
    </>
  )
}

export default Products