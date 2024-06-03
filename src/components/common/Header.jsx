import React from 'react'
import logo from '../../assets/common/logo.png'
import { menulists } from '../../assets/data/data'
import { CustomLink, Badges } from './CustomComponent'
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    
      <header className='header px-12 py-3 bg-gray-200 relative z-20'>

        {/* <div className='lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:z-10'>

        </div> */}

        <nav className='p-4 flex justify-between items-center'>
          
          <div className='flex items-center gap-14'>
            <div>
              <img src={logo} alt='Mooncart Logo' className='h-7'/>
            </div>
            <div className='hidden lg:flex items-center justify-between gap-8'>
              {menulists.map((list)=>(
                <li key={list.id} className='uppercase list-none'>
                  <a href={list.path}> {list.link} </a>
                </li>
              ))}
            </div>
          </div>

          <div className='flex items-center gap-8 icons'>
            <div className='uppercase hidden lg:block text-inherit relative z-20'>
              <CustomLink href='/' className=""> Login </CustomLink>
              <span>/</span>
              <CustomLink href='/' className=""> Register </CustomLink>
            </div>

            <div className='icons flex items-center justify-center gap-6'>
              <IoSearchOutline size={23} />
              <div className='relative z-20'>
                <IoCartOutline size={23} />
                <div className='absolute -top-2 -right-1.5'> 
                  <Badges color="bg-red-600"> 0 </Badges>
                </div>
              </div>
            </div>
          </div>
        </nav>

      </header>
    
  )
}

export default Header
