import React, { useState } from 'react'
import { IoMdHeart } from 'react-icons/io'
import { FaFacebook, FaFacebookSquare, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { BodyOne, Title } from '../../components/common/CustomComponent'
import { AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { CartActions } from '../../redux/slice/cartSlice'


export const RenderRatingsStars = (rating) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStars = rating % 1 !== 0;
  const stars = [];

  for(let i=1; i <= totalStars; i++) {
    if(i <= fullStars) {
      stars.push(<FaStar key={i} color='#ff8a00'/>);
    } else if(hasHalfStars && i === fullStars + 1) {
      stars.push(<FaStarHalfAlt key="half-star" color='#ff8a00'/>);
    } else {
      stars.push(<FaRegStar key={i} color='#ff8a00'/>);
    }
  }
  return stars;
}

const ProductCard = ({
  id,
  key,
  title,
  description,
  images,
  price,
  discount,
  rating,
  featured,
  category,
  color
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  
  const openModal = () => {
    // console.log("open modal hit")
    setIsModalOpen(true);
  }
  const closeModal = () => {
    // console.log("close modal hit")
    setIsModalOpen(false);
  };

  const discountPrice = price[0].value - (price[0].value - discount) / 100;

  const addToCart = () => {
    dispatch(
      CartActions.addToCart({ id, title, price:discountPrice, images })
    );
  }

  return (
    <>
      <div>
        <div className='product card'>
          <div className='images h-96'>
            {images.map((cover, index)=>{
              return(
                <img 
                  key={index} 
                  src={cover?.image} 
                  alt='' 
                  className='w-full h-full object-cover'
                />
              )
            })}

            <div className='flex justify-between w-full p-5 absolute top-0 left-0'>
              {discount && <button className='discount-btn'> {discount}% </button>}
              {featured && ( 
                <button className='feature-btn'> 
                  {featured === true && "Featured"} 
                </button> 
              )}
            </div>
            <div className='overlay flex items-center gap-2 justify-center absolute bottom-0 left-0 right-0 m-5'>
              <button className='quick-view-btn product-btn primary-btn' onClick={openModal}> 
                Quick view 
              </button>
              <button onClick={addToCart} className='add-to-cart-btn product-btn primary-btn'> 
                <IoCart size={23}/>
              </button>
              <button className='love-btn product-btn primary-btn'> 
                <IoMdHeart size={23}/>
              </button>
            </div>
          </div>
          
        </div>

        <div className='details flex items-center flex-col bg-white pt-6'>
          <NavLink to={`/product-deatils/${id}`}>
            <BodyOne> {title} </BodyOne>
          </NavLink>

          <div className='flex items-center gap-2 -mt-2 mb-2'> {RenderRatingsStars(rating)} </div>

          <div className='flex items-center gap-3'>
            {price.slice(0,1).map((priceItem, index)=>(
              <>
                <BodyOne className='line-through' key={index}>
                  ${priceItem.value}
                </BodyOne>
                <BodyOne className='text-primary-green'>
                  ${(priceItem.value - (priceItem.value * discount) / 100).toFixed(2)}
                </BodyOne>
              </>
            ))}
          </div>

        </div>
      </div>

      {isModalOpen &&  (
        <> 
          <div className='overlay-bg' onClick={closeModal}>
            <div className='modal-overlay' onClick={closeModal}>
              <div 
                className='modal-content flex justify-between' 
                onClick={(e) => e.stopPropagation()}
              >
                <div className='w-1/2 h-[500px] overflow-hidden'>
                  {images.slice(0,1).map((cover, index)=>{
                    return(
                      <img 
                        key={index} 
                        src={cover?.image} 
                        alt='' 
                        className='modal-image w-full h-full object-cover'
                      />
                    )
                  })}
                </div>
                
                <div className='modal-details w-1/2 h-[500px] overflow-y-scroll p-9'>
                  <button className='feature-btn bg-indigo-500'>
                    SALE {discount}% OFF
                  </button>
                  <Title level={2}> {title} </Title>
                  <div className='flex items-center gap-1 mt-1'> 
                    {RenderRatingsStars(rating)}
                  </div>
                  {price.slice(0,1).map((priceItem, index)=>(
                    <div className='flex items-center gap-3' key={index}>
                      <BodyOne className='line-through mt-4'>
                        ${priceItem.value}
                      </BodyOne>
                      <Title level={3} className='text-primary-green'>
                        ${(priceItem.value - (priceItem.value * discount) / 100).toFixed(2)}
                      </Title>
                    </div>
                  ))}

                  <BodyOne className='text-sm leading-6'> {description} </BodyOne>

                  <div className='flex items-center gap-3'>
                    <input type='text' value="1" className='w-12 h-12 text-primary outline-none border-2 border-primary px-4'/>
                    <button className='primary-btn'> ADD TO CART </button>
                  </div>

                  <hr className='my-5'/>
                  <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3'>
                      <Title level={5} className="text-lg">
                        Category : <span className='font-normal'> Wooden Product </span>
                      </Title>
                    </div>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3'>
                      <Title level={5} className="text-lg">
                        Tag : <span className='font-normal'> Wooden </span>
                      </Title>
                    </div>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3'>
                      <Title level={5} className="text-lg">
                        Share : 
                      </Title>
                      <div className='flex items-center mt-1 gap-3'>
                        <FaFacebook/>
                        <AiFillInstagram/>
                        <AiFillTwitterSquare/>
                      </div>
                    </div>
                  </div>

                  <button 
                    className='close-btn absolute top-0 right-0 w-12 h-12 flex justify-center items-center bg-primary-green text-white hover:bg-green-800' 
                    onClick={closeModal}
                  > 
                    ✖ 
                  </button>


                </div>

              </div>
            </div>
          </div>
        </>
      )}

    </>
  )
}

export default ProductCard
