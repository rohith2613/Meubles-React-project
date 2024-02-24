import React from 'react'

const About = () => {
  return (
    <>
    <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
      <h1 className='text-4xl font-bold leading-none tracking-tighter sm:text-6xl'>We Love</h1>
      <div className="stats bg-primary shadow">
        <div className='stat'>
        <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
          Meubles
        </div>
        </div>
      </div>
    </div>
    <p className='mt-6 text-lg max-w-2xl mx-auto'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore iste, quaerat modi doloremque distinctio voluptatum ad! Consectetur laudantium eaque numquam repellendus corporis reprehenderit sequi labore dignissimos dolor, id accusantium perspiciatis.
    </p>
    </>
  )
}

export default About
