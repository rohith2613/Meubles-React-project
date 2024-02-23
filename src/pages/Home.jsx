import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../components'

const Home = () => {
  return (
    <>
    <Header />
    <Navbar />
    <section className='align-element py-20'>
      <Outlet />
    </section>
    
    </>
  )
}

export default Home