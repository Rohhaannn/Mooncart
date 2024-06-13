import React from 'react'
import { Title, BodyOne } from '../../components/common/CustomComponent'
import { productlists } from '../../assets/data/data'
import  { ProductCard } from '../../router/index'



const Product = () => {
  return (
    <div>
      <section className='py-20 bg-gray-100'>
        <div className='container'>
          <Title level={4}> Most Popular Products</Title>
          <div className='flex items-center gap-3 uppercase'>
            <BodyOne className='text-sm'> All Products (39)</BodyOne>
            <BodyOne className='text-sm text-primary-green'> Wooden Products (15)</BodyOne>
          </div>

          <div className='content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
            {productlists.map((product) => {
              return(
                <ProductCard 
                  id={product.id}
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  images={product.images}
                  price={product.price}
                  discount={product.discount}
                  rating={product.rating}
                  featured={product.featured}
                  category={product.category}
                  color={product.color}
                />
              );
            })}
          </div>
        </div>

      </section>
      
    </div>
  )
}

export default Product
