import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
 
  return (
    <main className='grid min-h-screen place-items-center px-8'>
      <div className="text-center">
        <p className="text-9xl font-semibold text-primary">404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>page not found</h1>
        <p className='mt-6 text-lg leading-7'>Sorry, we couldn't find the page you're looking for.</p>
      </div>
      <div className=''>
        <Link to={"/"} className='btn btn-secondary'>Back to Home</Link>
      </div>

    </main>
  )
}

export default Error