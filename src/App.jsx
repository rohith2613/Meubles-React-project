import React from 'react'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import { About, Cart, Checkout, Error, Home,Landing,  Login, Orders, Products, Register, SingleProduct } from './pages'
import { ErrorElement } from './components'

// loaders
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProduct'



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
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "orders",
      element: <Orders />,
    },
    
  ]

},
{
  path: "/login",
  element: <Login />,
  errorElement: <Error />

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
