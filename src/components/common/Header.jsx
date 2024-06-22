import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/common/logo.png';
import { menulists } from '../../assets/data/data';
import { CustomNavLink, CustomLink, Badges } from './CustomComponent';
import { IoSearchOutline, IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import ModelCart from '../cart/ModelCart';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <header className={isHomePage ? `header px-12 py-3 bg-gray-200 relative z-20 ${isScrolled ? "scrolled" : ""}` : `header px-12 py-3 relative z-20 ${isScrolled ? "scrolled" : ""}`}>
      {isHomePage && (
        <div className={`${isScrolled ? "lg:bg-none" : "lg:bg-black"} lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:z-10`}></div>
      )}

      <nav className='p-4 flex justify-between items-center'>
        <div className='flex items-center gap-14'>
          
          <div>
            <Link to='/'>
              <img src={logo} alt='Mooncart Logo' className='h-7' />
            </Link>
          </div>
          <div className='hidden lg:flex items-center justify-between gap-8'>
            {menulists.map((list) => (
              <li key={list.id} className='uppercase list-none'>
                <CustomNavLink href={list.path}>{list.link}</CustomNavLink>
              </li>
            ))}
          </div>
        </div>
        
        <div className='flex items-center gap-8 icons'>

          <div className='uppercase hidden lg:block text-inherit relative z-20'>
            <CustomLink className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>Login</CustomLink>
            <span className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>/</span>
            <CustomLink className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>Register</CustomLink>
          </div>

          <div className={`icons flex items-center justify-center gap-6 cursor-pointer ${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
            
            <div className='relative z-20'>
              <IoSearchOutline size={23} className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`} />
            </div>
            
            <ModelCart/>

            <button
              onClick={toggleMenu}
              className='lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none'
            >
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>

          </div>
        </div>
        
        {/* Responsive menu if below the 768px */}
        <div ref={menuRef} className={`lg:hidden flex-col w-full p-5 absolute right-0 top-full transition-transform duration-300 transform ${isOpen ? 'open' : 'closed'} menu-container`}>
          {menulists.map((list) => (
            <li key={list.id} className='uppercase list-none'>
              <CustomNavLink href={list.path} className='text-white'>{list.link}</CustomNavLink>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

