import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/common/logo.png'
import { menulists } from '../../assets/data/data'
import { CustomNavLink, CustomLink, Badges } from './CustomComponent'
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  //close the menu if click outside of the menu
  const closeMenuOutside = (event) => {
    if(menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  //handle scroll menu
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  }

  useEffect(()=>{
    document.addEventListener("mousedown", closeMenuOutside);
    window.addEventListener("scroll", handleScroll);

    return() => {
      document.removeEventListener("mousedown", closeMenuOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  
  const isHomePage = location.pathname === '/';

  return (
    
      <header className={isHomePage ? `header px-12 py-3 bg-gray-200 relative z-20 ${isScrolled ? "scrolled" : ""} ` : `header px-12 py-3 relative z-20 ${isScrolled ? "scrolled" : ""}`}>

        {isHomePage && (

          <div className={`${isScrolled ? "lg:bg-none" : "lg:bg-black"} lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:z-10`}>

          </div>

        // lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:z-10
        )}


        <nav className='p-4 flex justify-between items-center'>
          
          <div className='flex items-center gap-14'>

            <div>
              <img src={logo} alt='Mooncart Logo' className='h-7'/>
            </div>

            <div className='hidden lg:flex items-center justify-between gap-8'>
              {menulists.map((list)=>(
                <li key={list.id} className='uppercase list-none'>
                  <CustomNavLink href={list.path}> {list.link} </CustomNavLink>
                </li>
              ))}
            </div>

          </div>

          <div className='flex items-center gap-8 icons'>

            <div className='uppercase hidden lg:block relative z-20'>

              <CustomLink className={`${isScrolled || isHomePage ? "text-white" : "text-green-600"}`}> Login </CustomLink>
              <span className={`${isScrolled || isHomePage ? "text-white" : "text-green-600"}`}>/</span>
              <CustomLink className={`${isScrolled || isHomePage ? "text-white" : "text-green-600"}`}> Register </CustomLink>
              
            </div>

            <div className={`icons flex items-center justify-center gap-6 ${isScrolled || isHomePage ? "text-white" : "text-green-600"}`}>
              <IoSearchOutline size={23} className={`${isScrolled || isHomePage ? "text-white" : "text-green-600"}`} />

              <div className='relative z-20'>
                <IoCartOutline size={23} className={`${isScrolled || isHomePage ? "text-white" : "text-green-600"}`} />
                <div className='absolute -top-2 -right-1.5'> 
                  <Badges color="bg-red-600">0</Badges>
                </div>
              </div>
              
              <div className='relative z-20'>
                <IoCartOutline size={23} className={`${isScrolled || isHomePage ? "text-white" : "text-green-600"}`} />
                <div className='absolute -top-2 -right-1.5'> 
                  <Badges color="bg-red-600">0</Badges>
                </div>
              </div>

            </div>
          </div> 
        </nav>

      </header>
    
  )
}

export default Header
