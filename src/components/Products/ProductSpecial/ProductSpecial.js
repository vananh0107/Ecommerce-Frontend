import React, { useRef } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import './ProductSpecial.scss';
import { addToWishlist } from '../../../features/products/productSlice';
import { useDispatch } from 'react-redux';
import Countdown from 'react-countdown';
const SpecialProduct = (props) => {
  const imageRef = useRef(props.image[0]);
  const handleClick = (e) => {
    const source = e.target.src;
    imageRef.current.src = source;
  };
  const dispatch = useDispatch();
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  const { brand, title, price, totalrating, sold, quantity, _id } = {
    ...props.data,
  };
  let location = useLocation();
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <>
        <p className="mb-0 p-color">
          <span className="day-till">{days}</span> days
        </p>
        <div className="d-flex gap-5 align-items-center">
          <span className="badge">{hours} </span>
          <span className="p-color">:</span>
          <span className="badge">{minutes} </span>
          <span className="p-color">:</span>
          <span className="badge">{seconds}</span>
        </div>
      </>
    );
  };
  return (
    <div className="col-4">
      <div className="special-product-card py-3 mb-3">
        <div className="d-flex justify-content-between">
          <div className="col-5 position-relative">
            <img
              src={props.image[0].url}
              className="img-product img-fluid py-4 mt-2"
              alt="watch"
              ref={imageRef}
              style={{ maxHeight: '200px' }}
            />
            <div className="wishList-icon position-absolute">
              <Link
                className="icon-add"
                onClick={(e) => {
                  addToWish(_id);
                }}
              >
                <img src="images/wish.svg" alt="wishList" />
              </Link>
            </div>
            {props.discount ? (
              <span className="position-absolute number-discount">
                -{props.discount}%
              </span>
            ) : (
              <></>
            )}
            <div className="d-flex flex-wrap justify-content-around wrap-img-orther">
              <img
                src={props.image[0].url}
                className="img-orther col-5"
                alt="watch"
                onClick={handleClick}
              />
              <img
                src={props.image[1].url}
                className="img-orther col-5"
                alt="watch"
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="special-product-content col-6 text-white">
            <h5 className="brand mt-4">{brand}</h5>
            <h6 className="title">
              {title?.length > 40 ? title.substr(0, 40) + '...' : title}
            </h6>
            {title?.length < 20 ? <p style={{ height: '18px' }}></p> : ''}
            <ReactStars
              count={5}
              value={totalrating}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="price-after-discount">${price}</span>
              <strike className="p-color">$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <Countdown date={new Date('2023-06-01')} renderer={renderer} />,
            </div>
            <div className="prod-count mt-3">
              <p className="p-color">Products: {quantity}</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={sold}
                aria-valuemin={0}
                aria-valuemax={quantity}
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: (sold / quantity) * 100 + '%' }}
                ></div>
              </div>
            </div>
            <Link
              className="button button-small mt-3"
              to={`${
                location.pathname === '/'
                  ? '/product/' + _id
                  : location.pathname === '/product/:id'
                  ? '/product/:id'
                  : '/product/' + _id
              }`}
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
