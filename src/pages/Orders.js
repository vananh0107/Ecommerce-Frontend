import React, { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/user/userSlice';
import Meta from '../components/Meta';
import Color from '../components/Color';

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  const orderStatus = useSelector((state) => state.auth?.userOrders);
  return (
    <>
      <Meta title={'Orders  '} />
      <BreadCrumb title="Orders " />
      <Container className="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-5">
                <h6>Order Id</h6>
              </div>
              <div className="col-2">
                <h6>Total Amount</h6>
              </div>
              <div className="col-3">
                <h6>Total Amount after Discount</h6>
              </div>
              <div className="col-2">
                <h6>Status</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          {orderStatus?.map((order) => {
            return (
              <>
                <div className="row py-3 d-flex align-items-center bc-febd69 border-white">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-5">
                        <h6>{order._id}</h6>
                      </div>
                      <div className="col-2">
                        <h6>{order.totalPrice}</h6>
                      </div>
                      <div className="col-3">
                        <h6>{order.totalPriceAfterDiscount}</h6>
                      </div>
                      <div className="col-2">
                        <h6>{order.orderStatus}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row bc-232f3e mb-4">
                  <div className="row p-3 d-flex align-items-center border-y">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-1">
                          <h6>Number</h6>
                        </div>
                        <div className="col-5">
                          <h6>Information</h6>
                        </div>
                        <div className="col-2">
                          <h6>Price</h6>
                        </div>
                        <div className="col-2">
                          <h6>Quantity</h6>
                        </div>
                        <div className="col-2">
                          <h6>Color</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {order.orderItems.map((item, index) => {
                    return (
                      <div className="row p-3 mg0-pd0">
                        <div className="col-12">
                          <div className="row d-flex align-items-center">
                            <div className="col-1">{index + 1}</div>
                            <div className="col-2">
                              <img
                                src="images/watch.jpg"
                                className="img-fluid"
                                alt="watch"
                              />
                            </div>
                            <div className="col-3 px-4">
                              <h6>{item.product.title}</h6>
                              <p className="fs-6">{item.product.description}</p>
                            </div>
                            <div className="col-2">
                              <h6>{item.price}</h6>
                            </div>
                            <div className="col-2">
                              <h6>{item.count}</h6>
                            </div>
                            <div className="col-2">
                              <Color colorData={item.color} />
                              {/* <h6>{item.color}</h6> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Orders;
