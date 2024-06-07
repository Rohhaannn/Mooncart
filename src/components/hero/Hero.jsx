import React from 'react'
import { herolist } from '../../assets/data/data'

export const Hero = () => {
  return (
    <div>
      <section className='h-[50vh] lg:h-[90vh] mt-20 bg-white relative z-1'>
        {herolist.map( item =>(
          <HeroItem 
            key={item.id} 
            title={item.title}
            description={item.description}
            price={item.price}
            color={item.color}
            image={item.image}
            />
        ))}
      </section>
    </div>
  )
}


export const HeroItem = ({ title, description, price, color, image }) => {
  return (
    <div>
      <section className='content flex justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20'>
        <div className="left w-1/2 p-8 lg:p-32 lg:py-64">
          <Title 
            level={1} 
            className="leading-none font-medium md-text-3xl lg:text-[70px] lg:leading-snug"
          >

            {title}
          </Title>
        </div>
        
      </section>
    </div>
  )
}

export default Hero


