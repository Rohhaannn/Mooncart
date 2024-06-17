import React from 'react'
import { Title, BodyOne } from '../../components/common/CustomComponent'
import { productlists } from '../../assets/data/data'
import { ProductCard } from '../../router/index'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";



function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-[32%] -right-5 lg:-right-32 rounded-full slider-btn" onClick={onClick}>
      <button className="next">
        <MdKeyboardArrowRight size={50}/>
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="absolute top-[32%] -left-5 lg:-left-32 rounded-full slider-btn z-10" onClick={onClick}>
      <button className="next">
        <MdKeyboardArrowLeft size={50}/>
      </button>
    </div>
  );
}


const ProductSlide = () => {
  return (
    <>
      <section className='py-20 bg-white slideproduct'>
        <div className='container'>
          <Title level={4}> What is trending now </Title>
          <div className='flex items-center gap-3 uppercase'>
            <BodyOne> 
              DISCOVER THE MOST TRENDING PRODUCT IN MOONCART
            </BodyOne>
          </div>

          <ProductSlideCard />
        </div>
      </section>
    </>
  )
}



export const ProductSlideCard = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive : [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          intialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <>
      <Slider {...settings}>

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

      </Slider>
    </>
  )
}

export default ProductSlide
