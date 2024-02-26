import React from 'react'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import { About, Cart, Checkout, Error, Home,Landing,  Login, Orders, Products, Register, SingleProduct } from './pages'
import { ErrorElement } from './components'

// loaders
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProduct'
import { loader as productLoader } from './pages/Products'
import { action as loginAction } from './pages/Login';
import { loader as checkoutLoader } from './pages/Checkout';
import { action as checkoutAction } from './components/CheckoutForm';

import { store } from './store';



const router = createBrowserRouter([

{
  path: "/",
  element: <Home />,
  errorElement: <Error />,
  children:[
    {
      index: true,
      element: <Landing />,
      errorElement: <ErrorElement />,
      loader: landingLoader,
    },
    {
      path: "products",
      element: <Products />,
      errorElement: <ErrorElement />,
      loader: productLoader,
    },
    {
      path: "products/:id",
      element: <SingleProduct />,
      errorElement: <ErrorElement />,
      loader: singleProductLoader,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
    },
    {
      path: "orders",
      element: <Orders />,
    },
    
  ]

},
{
  path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),

},
{
  path: "/register",
  element: <Register />,
  errorElement: <Error />

},
])


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
