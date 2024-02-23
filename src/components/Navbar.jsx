import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/letter-m.png';
import {FaBarsStaggered } from 'react-icons/fa6'
import NavLinks from './NavLinks';
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes ={
  winter:"winter",
  dracula:"dracula",
};

const getThemeFromLocalStorage = () =>{
  return localStorage.getItem("theme") || themes.winter
}

const Navbar = () => {
  const [theme,setTheme] = useState(getThemeFromLocalStorage);
  const handleTheme =() =>{
    const {winter, dracula} = themes;
    const newTheme = theme === winter ? dracula : winter;
    
    setTheme(newTheme);
  }

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme',theme);
    localStorage.setItem("theme",theme);
  },[theme])
  return (
    <nav className='bg-base-200 '>
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink to="/" className="hidden lg:flex btn bg-white  text-2xl items-center"> <img src={Logo
          } alt="logo" className='h-10' /> </NavLink>
          {/* DROP DOWN */}
          <div className="dropdown">
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6 '  />
            </label>
            <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200  rounded-box w-52  '>
             <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className='swap swap-rotate ' >
            <input type="checkbox" onChange={handleTheme} />
            {/* SUN icon*/}
            <BsSunFill className='swap-on h-4 w-4'/>

            {/* Moon icon */}
            <BsMoonFill className='swap-off h-5 w-5'/>
          </label>
          {/* Cart Link */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
            <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'></span>
            </div>
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar