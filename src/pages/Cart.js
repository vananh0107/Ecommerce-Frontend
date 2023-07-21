import React, { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CartProduct from '../components/Products/CartProduct';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from '../features/user/userSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCart());
  }, []);
  let userCartProduct = useSelector((state) => state?.auth?.userCart);
  const [cartState, setCartStatel] = useState({
    products: null,
    cartTotal: null,
  });
  let userCartProductChange = useSelector(
    (state) => state?.auth?.userCartChange
  );
  const deleteProductFormCart = (id, color) => {
    const inforItem = {
      id: id,
      color: color.slice(1),
    };
    dispatch(deleteCartProduct(inforItem));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };
  useEffect(() => {
    setCartStatel({
      products: userCartProductChange?.products,
      cartTotal: userCartProductChange?.cartTotal,
    });
  }, [userCartProductChange]);
  return (
    <>
      <Meta title={'Cart'} />
      <BreadCrumb title="Cart" />
      <Container className="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center border-b">
              <p className="col-6 p-color fs-5">Product</p>
              <p className="col-2 p-color fs-5 d-flex justify-content-end">
                Price
              </p>
              <p className="col-2 p-color fs-5 d-flex justify-content-end">
                Quantity
              </p>
              <p className="col-2 p-color fs-5 d-flex justify-content-end">
                Total
              </p>
            </div>
            <div>
              {(cartState.products
                ? cartState.products
                : userCartProduct && userCartProduct[0]?.products
              )?.map((item, index) => {
                return (
                  <CartProduct
                    src="images/watch.jpg"
                    color={item?.color}
                    price={item?.price}
                    title={item?.title}
                    description={item?.description}
                    total="$100"
                    key={index}
                    quantity={item?.count}
                    delete={deleteProductFormCart}
                    id={
                      typeof item.product === 'string'
                        ? item.product
                        : item.product._id
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <p className="p-color fs-5">
                  SubTotal: $
                  {cartState.cartTotal
                    ? cartState.cartTotal
                    : userCartProduct && userCartProduct[0]?.cartTotal}
                </p>
                <p className="p-color fs-6 my-3">
                  Taxes and shipping calculated at checkout
                </p>
                {
                  <Link
                    to={
                      userCartProductChange?.products?.length > 0
                        ? '/checkout'
                        : undefined
                    }
                    className="button"
                  >
                    Checkout
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
