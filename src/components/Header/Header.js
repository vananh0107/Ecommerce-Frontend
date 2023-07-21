import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUserCart } from '../../features/user/userSlice';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getAProduct } from '../../features/products/productSlice';
const Header = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state?.auth);
  let userCart = authState?.userCartChange;
  const [priceTotal, setPriceTotal] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [productOpt, setProductOpt] = useState([]);
  const [paginate, setPaginate] = useState(true);
  useEffect(() => {
    dispatch(getUserCart());
  }, []);
  let cartUpdate = useSelector(
    (state) => state?.auth?.userCartUpdate?.products?.length
  );
  useEffect(() => {
    setQuantity(cartUpdate?.products?.length);
    setPriceTotal(cartUpdate?.cartTotal);
  }, [cartUpdate, userCart]);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const productState = useSelector((state) => state?.product?.product);
  const navigate = useNavigate();
  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }
    setProductOpt(data);
  }, [productState]);
  const renderOption = (option) => (
    <div>
      <img
        src="images/watch.jpg"
        alt={option.name}
        style={{ height: '56px', marginRight: '8px' }}
      />
      <span>{option.name}</span>
    </div>
  );
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+91 8264954234">
                  +91 8264954234
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" to="/">
                  Digitic
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <Typeahead
                  id="basic-typeahead-single"
                  onPaginate={() => console.log('Results Paginated')}
                  onChange={(selected) => {
                    navigate(`/product/${selected[0]?.prod}`);
                    dispatch(getAProduct(selected[0]?.prod));
                  }}
                  labelKey="name"
                  options={productOpt}
                  paginate={paginate}
                  minLength={5}
                  renderMenuItemChildren={renderOption}
                  placeholder="Search for product here..."
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="../../images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="../../images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center text-white"
                  >
                    <img src="../../images/user.svg" alt="user" />
                    {authState.user === null ? (
                      <p className="mx-2 mb-0">
                        Log in <br /> My Account
                      </p>
                    ) : (
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <p>
                            Welcome <br /> {authState?.user?.lastname}
                          </p>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <p
                              className="dropdown-item"
                              to=""
                              onClick={handleLogout}
                            >
                              Log out
                            </p>
                          </li>
                        </ul>
                      </div>
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="../../images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">
                        {quantity
                          ? quantity
                          : (userCart && userCart?.products?.length) ||
                            (authState?.userCart &&
                              authState?.userCart[0]?.products?.length)}
                      </span>
                      <p className="mb-0 small-price">
                        ${' '}
                        {priceTotal
                          ? priceTotal
                          : (userCart && userCart?.cartTotal) ||
                            (authState?.userCart &&
                              authState?.userCart[0]?.cartTotal)}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="../../images/menu.svg" alt="" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-30">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/my-orders">Orders</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
