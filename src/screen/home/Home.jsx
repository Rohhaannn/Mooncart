import { Banner, Hero, InstagramPost, Product, ProductSlide, ShippingInfo, Testimonials } from '../../router/index'
import { Title, Caption } from '../../components/common/CustomComponent'
import { ProductSlideCard } from '../product/ProductSlide'


const Home = () => {
  return (
    <>
      <Hero/>
      <Product/>
      <ShippingInfo/>
      <Banner/>
      <ProductSlide/>
      <Testimonials/>


      <div className='container my-16 sliderproduct'>
        <Title level={3}> Recent Product </Title>
        <Caption> DISCOVER THE MOST TRENDING PRODUCT IN MOONCART </Caption>
        <br/>
        <ProductSlideCard />
      </div>

      <InstagramPost/>
    </>
  )
}

export default Home
