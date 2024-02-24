import React from 'react'

import hero1 from '../assets/Hero1.jpg';
import hero2 from '../assets/Hero2.jpg';
import hero3 from '../assets/Hero3.jpg';
import hero4 from '../assets/Hero4.jpg';
import { Link } from 'react-router-dom';

const carouselImages = [hero4,hero2,hero3,hero1];

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-2xl font-bold tracking-tight sm:text-6xl'>We are changing the way people shop</h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ullam veniam ex qui aliquid asperiores perspiciatis minus dolores. A, eaque?</p>
        <div className='mt-8'>
          <Link to="/products" className='btn btn-primary '>Our Products </Link>
        </div>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
        {carouselImages.map((image)=>{
          return <div key={image} className='carousel-item '>
            <img src={image} className='rounded-box h-full w-80 ' />
          </div>
        })  }
      </div>
      
  
    </div>
  )
}

export default Hero