import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import watch from '../images/watch.jpg';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import Color from '../components/Color';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import {
  createCashOrder,
  getLocation,
  getUserCart,
} from '../features/user/userSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
const shippingSchema = yup.object({
  firstname: yup.string().required('Firstname is required'),
  lastname: yup.string().required('Lastname is required'),
  address: yup.string().required('Address is required'),
  district: yup.string().required('District is required'),
  methodPayment: yup.string().required('Method payment is required'),
  city: yup.string().required('City is required'),
  email: yup
    .string()
    .email('Email should be valid')
    .required('Email is required'),
});
const Checkout = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      address: '',
      district: '',
      city: '',
      voucher: '',
      email: '',
      methodPayment: '',
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      let data = {};
      data.shippingInfor = values;
      data.orderItems = userCart && userCart[0]?.products;
      data.totalPrice = (userCart && userCart[0].cartTotal) + 20;
      data.totalPriceAfterDiscount = (userCart && userCart[0].cartTotal) + 20;
      dispatch(createCashOrder(data));
      dispatch(getUserCart());
      navigate('/my-orders');
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCart());
    dispatch(getLocation());
  }, []);
  const navigate = useNavigate();
  const userCart = useSelector((state) => state?.auth?.userCart);
  const locations = useSelector((state) => state?.auth?.location);
  return (
    <Container className="checkout-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-6">
          <div className="checkout-left-data">
            <h3 className="website-name">Dev Corner</h3>
            <nav
              style={{ '--bs-breadcrumb-divider': '>' }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb d-flex align-items-center">
                <li className="breadcrumb-item">
                  <Link
                    className="breadcrumb-item total-price active"
                    to="/cart"
                  >
                    Cart
                  </Link>
                </li>
                <AiOutlineDoubleRight className="mx-1" />
                <li className="breadcrumb-item total-price" aria-current="page">
                  Information
                </li>
                <AiOutlineDoubleRight className="mx-1" />
                <li className="breadcrumb-item total-price active">Shipping</li>
                <AiOutlineDoubleRight className="mx-1" />
                <li
                  className="breadcrumb-item total-price active"
                  aria-current="page"
                >
                  Payment
                </li>
              </ol>
            </nav>
            <h4 className="title total">Contact Information</h4>
            <p className="user-details total my-2">
              Vanhdev (buivananh172003@gmail.com)
            </p>
            <h4 className="mb-3">Shipping Address</h4>
            <form
              onSubmit={formik.handleSubmit}
              action=""
              className="d-flex gap-15 flex-wrap justify-content-between"
            >
              <div className="w-100">
                <select
                  name="city"
                  className="form-control form-select"
                  onChange={formik.handleChange('city')}
                  onBlur={formik.handleBlur('city')}
                  value={formik.values.city}
                  id="country"
                >
                  <option value="" selected disabled>
                    Select City
                  </option>
                  {locations?.map((location) => {
                    return (
                      <option value={location.name}>{location.name}</option>
                    );
                  })}
                </select>
                <div className="error">
                  {formik.touched.city && formik.errors.city}
                </div>
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  name="firstname"
                  onChange={formik.handleChange('firstname')}
                  onBlur={formik.handleBlur('firstname')}
                  value={formik.values.firstname}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  name="lastname"
                  onChange={formik.handleChange('lastname')}
                  onBlur={formik.handleBlur('lastname')}
                  value={formik.values.lastname}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
              </div>
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control"
                  name="address"
                  onChange={formik.handleChange('address')}
                  onBlur={formik.handleBlur('address')}
                  value={formik.values.address}
                />
                <div className="error">
                  {formik.touched.address && formik.errors.address}
                </div>
              </div>
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  name="email"
                  onChange={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                  value={formik.values.email}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
              </div>
              <div className="flex-grow-1">
                <select
                  name="district"
                  className="form-control form-select"
                  id=""
                  onChange={formik.handleChange('district')}
                  onBlur={formik.handleBlur('district')}
                  value={formik.values.district}
                >
                  <option value="" selected disabled>
                    Select District
                  </option>
                  {locations
                    ?.find(
                      (location) =>
                        location.name ===
                        document?.getElementById('country')?.value
                    )
                    ?.districts?.map((district) => {
                      return (
                        <option value={district.name}>{district.name}</option>
                      );
                    })}
                </select>
                <div className="error">
                  {formik.touched.district && formik.errors.district}
                </div>
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="voucher"
                  className="form-control"
                  name="voucher"
                  onChange={formik.handleChange('voucher')}
                  onBlur={formik.handleBlur('voucher')}
                  value={formik.values.voucher}
                />
              </div>
              <div className="w-100">
                <select
                  className="form-control form-select"
                  name="methodPayment"
                  onChange={formik.handleChange('methodPayment')}
                  onBlur={formik.handleBlur('methodPayment')}
                  value={formik.values.methodPayment}
                >
                  <option value="" selected disabled>
                    Select method payment
                  </option>
                  <option value="Payment on delivery">
                    Payment on delivery
                  </option>
                  <option value="Online payment">Online payment</option>
                </select>
                <div className="error">
                  {formik.touched.methodPayment && formik.errors.methodPayment}
                </div>
              </div>
              <div className="w-100 mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/cart" className="text-dark">
                    <BiArrowBack className="me-2" />
                    Return to Cart
                  </Link>
                  <button className="button" type="submit">
                    Confirm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          {userCart &&
            userCart[0].products.map((product) => {
              return (
                <div className="border-bottom py-4">
                  <div className="d-flex gap-10 mb-2 align-items-center">
                    <div className="w-75 d-flex gap-10">
                      <div className="w-25 position-relative">
                        <img className="img-fluid" src={watch} alt="product" />
                      </div>
                      <div>
                        <p className="item-color fs-6 my-2 text-capital">
                          {product.product.title}
                        </p>
                        <div className="item-price fs-6 my-2">
                          <Color colorData={product.color} />
                        </div>
                        <p className="item-color fs-6 my-2 text-capital">
                          Quantity: {product.count}
                        </p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="item-totalPrice">$ {product.price}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="border-bottom">
            <div className="d-flex justify-content-between align-items-center my-4">
              <p className="total fs-6">Subtotal</p>
              <p className="total-price fs-6">
                $ {userCart && userCart[0]?.cartTotal}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center my-4">
              <p className="mb-0 total fs-6">Shipping</p>
              <p className="mb-0 total-price fs-6">$ 20</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bootom py-4">
            <h4 className="total">Total</h4>
            <h5 className="total-price">
              $ {(userCart && userCart[0].cartTotal) + 20}
            </h5>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
