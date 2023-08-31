import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../features/products/productSlice';
import { useEffect } from 'react';
import SpecialProduct from './ProductSpecial';

const ProdSpecialWrap = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const product = useSelector((state) => state?.product?.product);
  let countProduct = 0;
  return (
    <div>
      <div className="row">
        {product &&
          product?.map((item, index) => {
            if (countProduct < props?.length && item?.tags === 'special') {
              countProduct++;
              return (
                <SpecialProduct key={item&&item['_id']} data={item} image={item?.images} />
              );
            }
          })}
      </div>
    </div>
  );
};

export default ProdSpecialWrap;
