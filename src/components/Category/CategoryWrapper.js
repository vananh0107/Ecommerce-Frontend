import React, { useEffect } from 'react';
import Category from './CategoryItem';
import './Category.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalProductCat } from '../../features/products/productSlice';
const CategoryWrapper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalProductCat());
  }, []);
  const data = useSelector((state) => state.product?.categoryProduct);
  const number = useSelector((state) => state.product?.categoryProductTotal);
  return (
    <div className="categories d-flex flex-wrap justify-content-between align-items-center">
      {data?.map((item, index) => {
        return (
          <Category
            src={item?.image}
            title={item?.title}
            quantity={number && number[index]?.count}
            alt={item?.title}
          />
        );
      })}
    </div>
  );
};

export default CategoryWrapper;
