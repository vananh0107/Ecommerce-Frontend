import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../features/products/productSlice';
import { useEffect } from 'react';
import ProductCard from './ProductFeature';

const ProdFeatureWrap = (props) => {
  const productFeature = useSelector((state) => state?.product?.product);
  const getProducts = () => {
    const data = { tags: 'featured' };
    dispatch(getAllProducts(data));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  let countItem = 0;
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Feature Collection</h3>
        </div>
      </div>
      <div className="row">
        {productFeature &&
          productFeature?.map((item, index) => {
            if (countItem < 6 && item?.tags === 'featured') {
              countItem++;
              return <ProductCard index={index} item={item} key={item&&item['_id']}/>;
            }
          })}
      </div>
    </div>
  );
};

export default ProdFeatureWrap;
