import React, { createContext, useEffect } from 'react';
import SwipperProduct from '../Swipper/Swipper';
import ProductCard from '../ProductFeature/ProductFeature';
import './PopularProduct.scss';
import { useDispatch, useSelector } from 'react-redux';
import { SwiperSlide } from 'swiper/react';
import { getCategoryProduct } from '../../../features/products/productSlice';
export const ProdSpeContent = createContext();
const ProdSpecialWrap = () => {
  const notIconAdd = true;
  const productState = useSelector((state) => state?.product?.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryProduct());
  }, []);
  const productCategory = useSelector(
    (state) => state?.product?.categoryProduct
  );
  return (
    <ProdSpeContent.Provider value={notIconAdd}>
      <div className="col-2 popular-prod">
        <div>
          {productCategory?.map((item, index) => {
            if (index < 6 && index !== 1) {
              return (
                <div className="popular-prod-type my-3">
                  <img src={item?.image} alt={item?.title} />
                  <span className="p-color popular-prod-name text-active">
                    {item?.title}
                  </span>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="col-2">
        <div className="product-special-intro text-white">
          <div className="special-intro-text">
            <p>15% OFF</p>
            <h5>Home Speakers</h5>
            <p>From $39$ or $16.62/mo for 24 mo.*</p>
          </div>
          <img src="images/apple-loud.png" alt="" className="img-intro-sale" />
        </div>
      </div>
      <div className="col-8">
        <SwipperProduct
          delay={2000}
          next={'.button-next'}
          prev={'.button-prev'}
        >
          {productState &&
            productState?.map((item, index) => {
              if (item?.tags === 'popular') {
                return (
                  <SwiperSlide key={index}>
                    <ProductCard index={index} item={item} />
                  </SwiperSlide>
                );
              }
            })}
        </SwipperProduct>
      </div>
    </ProdSpeContent.Provider>
  );
};

export default ProdSpecialWrap;
