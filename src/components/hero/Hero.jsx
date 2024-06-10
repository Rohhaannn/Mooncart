import React, { useState } from 'react';
import { herolist } from '../../assets/data/data';
import { Title, BodyOne, Caption } from '../common/CustomComponent';
import PropTypes from "prop-types";

export const Hero = () => {
  return (
    <div>
      <section className='h-[250vh] lg:h-[190vh] mt-20 bg-white relative z-1'>
        {herolist.map(item => (
          <HeroItem 
            key={item.id} 
            title={item.title}
            description={item.description}
            prices={item.prices} 
            color={item.color}
            image={item.image}
          />
        ))}
      </section>
    </div>
  );
}

export const HeroItem = ({ title, description, prices, color, image }) => {
  const [selectedColor, setSelectedColor] = useState(color[0].value);
  const [selectedPrice, setSelectedPrice] = useState(
    prices.find((price) => price.color === color[0].value)
  );

  const handleColorClick = color => {
    const newSelectedPrice = prices.find((price) => price.color === color);
    setSelectedColor(color);
    setSelectedPrice(newSelectedPrice);
  }

  return (
    <div>
      <section className='content flex justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20 bg-gray-100'>
        <div className="left w-2/4 p-8 lg:p-32 lg:py-64">
          <Title 
            level={1} 
            className="leading-none font-medium md-text-3xl lg:text-[70px] lg:leading-snug"
          >
            {title}
          </Title>
          <BodyOne>{description}</BodyOne>
          <div className='flex items-start gap-8 my-5'>
            <div>
              <Caption> Prices </Caption>
              <div className='mt-3'>
                <Title level={5}>{selectedPrice.value.toFixed(2)}</Title>
              </div>
            </div>
            <div>
              <Caption> Colors </Caption>
              <div className="flex items-center justify-center gap-3 mt-5">
                {color.map((color, i) => (
                  <div 
                    key={i}
                    onClick={() => handleColorClick(color.value)}
                    className={`w-4 h-4 rounded-full cursor-pointer border-gray-300 ${selectedColor === color.value ? "border-2 border-black" : ""}`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='flex items-center gap-8'>
            <button className='primary-btn uppercase'> View Details </button>
            <button className='secondary-btn uppercase'> View Shop </button>
          </div>
        </div>
        <div className='right bg-white p-5 w-1/2 h-full flex justify-center items-center relative z-50'>
          <img src={image} alt={title} className="h-full w-full object-contain" />
        </div>
        <div className="lg:bg-black lg:h-[90vh] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10"></div>
      </section>
    </div>
  );
}

HeroItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  prices: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  color: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
  })).isRequired,
  image: PropTypes.string.isRequired,
};

export default Hero;


