import React,{ useState } from 'react'
import { herolist } from '../../assets/data/data'
import { Title, BodyOne, Caption } from '../common/CustomComponent';
import PropTypes from "prop-types";

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


export const HeroItem = ({ title, description, prices, color, image }) => {

  const [selectedColor, setSelectedColor] = useState(color[0].value);

  const [selectedPrice, setSelectedPrice] = useState(
    prices.find((price)=> price.color === color[0].value)
  );

  const handleColorClick = color => {
    const newSelectedPrice = prices.find((price) => price.color === color);
    setSelectedColor(color);
    setSelectedPrice(newSelectedPrice);
  }

  return (
    <div>
      <section className='content flex justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20'>
        <div className="left w-2/3 p-8 lg:p-32 lg:py-64">

          <Title 
            level={1} 
            className="leading-none font-medium md-text-3xl lg:text-[70px] lg:leading-snug"
          >
            {title}
          </Title>

          <BodyOne> {description} </BodyOne>

          <div className='flex items-start gap-8 my-5'>
            <div>
              <Caption> Prices </Caption>
              <div className='mt-3'>
                <Title level={5}>{selectedPrice.value.toFixed(2)}</Title>
              </div>
            </div>

          </div>
        </div>
        
      </section>
    </div>
  )
}

export default Hero


HeroItem.propTypes = {
  title: PropTypes.isRquired,
  description: PropTypes.node.isRquired,
  prices: PropTypes.node.isRquired,
  colors: PropTypes.node.isRquired,
  image: PropTypes.node.isRquired,
}


