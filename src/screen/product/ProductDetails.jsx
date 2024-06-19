import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { productlists } from './../../assets/data/data';
import { Title, Caption, BodyOne} from '../../components/common/CustomComponent';
import { RenderRatingsStars } from './ProductCard';
import { BiHeart, BiMinus, BiPlus } from 'react-icons/bi';



const colorsValue = {
  red: "#fe7fef",
  yellow: "#ffff00",
  green: "#008000",
  blue: "#0000ff",
  white: "#f8f8f8",
  brown: "#a52a2a",
  clear: "#ffffff",
  "dark brown": "#654321",
  light: "#f5f5dc",
  black: "#000000",
  natural: "#8b4513",
  "light brown": "#deb887",
  dark: "#696969",
  gray: "#808080",
  beige: "#f5f5dc",
};

const ProductDetails = () => {

  const { productId } = useParams();
  const product = productlists.find(
    product => product.id === parseInt(productId)
  );

  const { title, images, price, description, discount, rating, color} = product;

    // console.log(product);

    const [selectedColor, setSelectedColor] = useState(color[0].value);
    const [selectedPrice, setSelectedPrice] = useState(
      price.find((price) => price.color === color[0].value)
    );
  
    const handleColorClick = (color) => {
      const newSelectedPrice = prices.find((price) => price.color === color);
      setSelectedColor(color);
      setSelectedPrice(newSelectedPrice);
    };
  
    if(!product) {
      return <div> Product Not Found </div>
    }


  

  return (
    <>
      <section className='container mt-32 slideproduct'>
        <div className='flex justify-between flex-col lg:flex-row' key={productId}>

          <div className='images lg:w-1/2'>
            <div>
              {images.slice(0, 1).map((image, index)=>(
                <img 
                  src={image.image} 
                  key={index}
                  className='w-full h-full'
                  alt="" 
                />
              ))}
            </div>
          </div>
          
          <div className='details lg:w-1/2 px-16 pt-16'>
            
            <button className='feature-btn bg-indigo-500'>
              SALE {discount}% OFF
            </button>
            
            <Title level={2}> {title} </Title>
            
            <div className='flex items-center gap-2 mb-5'>
              <div className='flex items-center gap-1'>
                {RenderRatingsStars(rating)}
              </div>
              <p>{product.rating} Review </p>
            </div>

            <p className='text-[15px]'> {description} </p>

            <br />

            <div>
              <Caption> Colors </Caption>
              <div className='flex items-center gap-3 mt-5'>
                {color.map((colorOption, index)=>(
                  <div 
                    key={index}
                    onClick={() => handleColorClick(colorOption.value)}
                    className={`w-4 h-4 rounded-full -mt-3 cursor-pointer border-gray-300 ${selectedColor === colorOption.value ? "selected" : ""}`}
                    style={{backgroundColor: colorsValue[colorOption.value] }}
                  >
                    
                  </div>
                ))}
              </div>
            </div>
            
            <div className='mt-5'>
              <Caption>Prices</Caption>
              <div className='flex items-center gap-3'>
                <BodyOne className="line-through mt-3">
                  ${selectedPrice.value}
                </BodyOne>
                <Title level={4} className="text-primary-green">
                  ${(
                    selectedPrice.value - (selectedPrice.value * product.discount) / 100
                  ).toFixed(2)}
                </Title>
              </div>
            </div>

            <br />

            <div className='flex items-center gap-3'>
              <button className='w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300'>
                <BiPlus size={20}/>
              </button>
              <input type='text' value="1" className='w-12 h-12 text-center text-primary outline-none border border-gray-300'/>
              <button className='w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300'>
                <BiMinus size={20}/>
              </button>

              <button className='primary-btn'>
                ADD TO CART
              </button>

            </div>

            <div className='flex items-center gap-3 mt-6'>
              <button className='flex items-center gap-2 primary-btn'>
                <BiHeart size={20}/>
              </button>
              <button className='flex items-center gap-2 secondary-btn'>
                <BiHeart size={20}/>
                Add to wishlist
              </button>
              <button className='flex items-center gap-2 secondary-btn'>
                Compare
              </button>
            </div>

            <hr className='my-5'/>
            <label htmlFor=''>
              <span className='text-primary font-bold'> SKU: </span> PRT584E63A
            </label> <br />
            <label htmlFor=''>
              <span className='text-primary font-bold'> Category: </span> Baby Product
            </label>

          </div>

        </div>


        <div className='flex justify-between flex-col lg:flex-row my-10'>
          <div className='lg:w-1/2'>
            <Title level={3}> Fits Your Child </Title>

            <Caption className="text-justify">
              Designed for superior child comfort, OneFit provides extra rear-facing legroom and multiple recline options in every mode of use. With tge widest range of height adjustmnts, the easy-adjust headrest system adjusts with the harness to grow with your child. OneFit accommodates tiny passengers from the very start with a removable head and body support insert for newborns weighing 5-11 lb
            </Caption>

            <Title level={3} className='mt-6'> Specifications </Title>
            
            <div className='felx flex-col gap-3 mt-2'>
              <Caption className="font-bold"> 
                Assembled Dimensions (L x W x H): 21.5" x 19" x 27" 
              </Caption>
              <Caption> Assembled Product Weight: 25 lbs. </Caption>
              <Caption> Harness mode - Rear-Facing-40 lbs </Caption>
              <Caption> Harness mode - Forward-Facing-65 lbs </Caption>
              <Caption> Harness mode - Forward + Booster40-100 lbs </Caption>
              <Caption> Booster mode - Backless/a </Caption>
              <Caption> Rear-Facing Child Max Height Capacity43 in </Caption>
              <Caption> Forward-Facing Child Max Height Capacity54 in </Caption>
            </div>
          </div>

          <div className='lg:w-1/2 grid grid-cols-2 gap-5 lg:px-8 mt-5 bg-gray-300'>
            <ProductDetailsBox 
              title="All-in-One Car Seat" 
              desc="One car seat that your child, vehicle and life from birth through booster"
            />
            <ProductDetailsBox 
              title="Space-Saving Design" 
              desc=" Slim, space saving design takes up less space in vehicle without compromising comfort"
            />
            <ProductDetailsBox 
              title="Easiest to install Correctly" 
              desc="Chicco patented SuperClinch force-multiplying LATCH tightner ensure a tight and secure fit every time"
            />
            <ProductDetailsBox 
              title="No Added Chemicals" 
              desc="ClearTex products meet federal flammability standards without added chemicals"
            />
            
          </div>
        </div>

        <Title level={3}> Related Products </Title>
      </section>
      
    </>
  )
}

export default ProductDetails

export const ProductDetailsBox = ({ title, desc}) => {
  return (
    <>
      <div className='flex items-center justify-center flex-col gap-3 text-center'>
        <Title level={5}>{title}</Title>
        <Caption>{desc}</Caption>
      </div>
    </>
  )
}
