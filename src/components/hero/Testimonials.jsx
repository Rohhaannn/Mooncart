import React from 'react'
import { Title, BodyOne } from '../../components/common/CustomComponent'

const Testimonials = () => {
  return (
    <>
      <section className='testimonials'>
        <div className='container h-full flex items-center justify-center'>
          <div className='w-1/2 flex relative z-50'>
            
            <div className='box w-96 h-96 bg-white rounded-full z-50'>
              <img 
                src="../images/hero/girl.png" 
                alt=""
                className='absolute -top-[130px] left-0 z-10 rounded-full'
              />
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.5)]  px-5 backdrop-blur-sm p-3 rounded-lg absolute top-36 right-60 z-50'>
              <BodyOne className='leading-none'> Our satisfied Users </BodyOne>
              
              <div className='flex items-center'>
                <img 
                  src="../images/testimonials/pic1-2.png" 
                  alt="" 
                  className='w-14 h-14'
                />
              </div>

            </div>

          </div>
        </div>
      </section> 
    </>
  )
}

export default Testimonials
