import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductWish from '../components/Products/ProductWish/ProductWish';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserProductWishlist } from '../features/user/userSlice';
import { useState } from 'react';
import { addToWishlist } from '../features/products/productSlice';
const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };
  let wishlistState = useSelector((state) => state.auth?.wishlist?.wishList);
  return (
    <>
      <Meta title={'Wishlist'} />
      <BreadCrumb title="Wishlist" />
      <Container className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishlistState && wishlistState.length === 0 && (
            <div className="text-center fs-6">No Data</div>
          )}
          {wishlistState?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <ProductWish data={item} remove={removeFromWishlist} />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
