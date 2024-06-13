import React from 'react'

const ProductCard = ({
  id,
  key,
  Title,
  description,
  images,
  price,
  discount,
  rating,
  featured,
  category,
  color
}) => {
  return (
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
            {featured && <button className='feature-btn'> {featured === true && "Featured"} </button>}
          </div>
          <div className='overlay flex items-center gap-2 justify-center absolute bottom-0 left-0 right-0 m-5'>
            <button className='quick-view-btn primary-btn'> Quick view </button>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default ProductCard
