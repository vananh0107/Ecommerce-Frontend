import React from 'react';
import Marquee from 'react-fast-marquee';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import ProdPopularWrap from '../components/Products/PopularProduct/ProdPopularWrap';
import MainContent from '../components/Contents/MainContent';
import SwiperWrap from '../components/Products/Swipper/Swipper';
import Container from '../components/Container';
import SmallBanner from '../components/SmallBanner';
import Service from '../components/Service';
import CategoryWrapper from '../components/Category/CategoryWrapper';
import FamousCard from '../components/FamousCard';
import BlogWrapper from './Blog/BlogWrapper';
import ProdFeatureWrap from '../components/Products/ProductFeature/ProdFeatureWrap';
import ProdSpecialWrap from '../components/Products/ProductSpecial/ProdSpecialWrap';
import { SwiperSlide } from 'swiper/react';
const Home = () => {
  return (
    <>
      <Container className="py-5">
        <div className="row">
          <div className="col-6">
            <SwiperWrap slidesPerView={1} pagination delay={5000}>
              <SwiperSlide key={0}>
                <MainContent source="../images/main-banner-1.jpg" />
              </SwiperSlide>
              <SwiperSlide key={0}>
                <MainContent source="../images/main-banner.jpg" />
              </SwiperSlide>
            </SwiperWrap>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <SmallBanner
                src={'../images/catbanner-01.jpg'}
                title={'Best Sale'}
                product={'Laptops Max'}
                desc_pre={`From $1699.00 `}
                desc_after={` or $64.42/mo.`}
              />
              <SmallBanner
                src={'../images/catbanner-02.jpg'}
                title={'NEW ARRIVAL'}
                product={'But IPad Air'}
                desc_pre={`From $599.00 `}
                desc_after={` or $41.62/mo. for 12 mo.*`}
              />
              <SmallBanner
                src={'../images/catbanner-03.jpg'}
                title={'15% off'}
                product={'Smartwatch 7'}
                desc_pre={`Shop the latest band `}
                desc_after={` styles and colors`}
              />
              <SmallBanner
                src={'../images/catbanner-04.jpg'}
                title={'free engraving'}
                product={'AirPods Max'}
                desc_pre={`High-fidelity payback & `}
                desc_after={` ultra-low distortion`}
              />
            </div>
          </div>
        </div>
      </Container>
      <Container className="py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <Service
                src="../images/service.png"
                title="Free Shipping"
                desc="From all orders over $5"
              />
              <Service
                src="../images/service-02.png"
                title="Daily Surprise Offers"
                desc="Save upto 25% off"
              />
              <Service
                src="../images/service-03.png"
                title="Support 24/7"
                desc="Shop with an expert"
              />
              <Service
                src="../images/service-04.png"
                title="Affordable Prices"
                desc="Get Factory Default Price"
              />
              <Service
                src="../images/service-05.png"
                title="Secure Payment"
                desc="100% Protected Payment"
              />
            </div>
          </div>
        </div>
      </Container>
      <Container className="py-5">
        <div className="row">
          <div className="col-12">
            <CategoryWrapper />
          </div>
        </div>
      </Container>
      <Container className="featured-wrapper py-5">
        <ProdFeatureWrap />
      </Container>
      <Container className="famous-wrapper py-5">
        <div className="row">
          <div className="col-3">
            <FamousCard
              className="famous-card-black famous-card box-shadow-2"
              category="Big Screen"
              title="Smart Watch Series 7"
              desc="From $399or $16.62/mo. for 24 mo.*"
              src="images/famous-1.webp"
              text-color="text-white"
            />
          </div>
          <div className="col-3">
            <FamousCard
              className="famous-card-white famous-card box-shadow-2"
              category="Studio Display"
              title="600 nits of brightness."
              desc="27-inch 5K Retina display"
              src="images/famous-2.webp"
              text-color="text-dark"
            />
          </div>
          <div className="col-3">
            <FamousCard
              className="famous-card-white famous-card position-relative box-shadow-2"
              category="smartphonesy"
              title="Smartphone 13 Pro."
              desc="Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*"
              src="images/famous-3.webp"
              text-color="text-dark"
              img-class="position-absolute"
            />
          </div>
          <div className="col-3">
            <FamousCard
              className="famous-card-white box-shadow-2"
              category="home speakers"
              title="Room-filling sound."
              desc="From $699 or $116.58/mo. for 12 mo.*"
              src="images/famous-4.webp"
              text-color="text-dark"
            />
          </div>
        </div>
      </Container>
      <Container className="special-wrapper py-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <ProdSpecialWrap length={6} />
        </div>
      </Container>
      <Container className="popular-wrapper py-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h3 className="section-heading col-8">Our Popular Products</h3>
            <p className="col-4 position-relative d-flex align-items-center justify-content-end">
              <span className="button-prev position-absolute">
                <AiOutlineDoubleLeft />
              </span>
              <span className="button-next position-absolute">
                <AiOutlineDoubleRight />
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <ProdPopularWrap />
        </div>
      </Container>
      <Container className="marque-wapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-warpper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container className="blog-wrapper py-5">
        <BlogWrapper />
      </Container>
    </>
  );
};
export default Home;
