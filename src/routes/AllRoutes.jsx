import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Cart, Checkout, Error, Home,  Login, Orders, Products, Register, SingleProduct } from '../pages'

const AllRoutes = () => {
  return (
    <div >
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='login' element={<Login />}  />
      <Route path='register' element={<Register />}  />
      <Route path='about' element={<About />}  />
      <Route path='products' element={<Products />}  />
      <Route path='checkout' element={<Checkout />}  />
      <Route path='orders' element={<Orders />}  />
      <Route path='products/:id' element={<SingleProduct />}  />
      <Route path='cart' element={<Cart />} />
      <Route path='*' element={<Error />}  />
    </Routes>
    </div>
  )
}

export default AllRoutes