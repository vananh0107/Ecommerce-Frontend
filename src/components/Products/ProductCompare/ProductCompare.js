import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Color from '../../Color';
import './ProductCompare.scss';
import ReactStars from 'react-rating-stars-component';
const ProductCompare = (props) => {
  const { data, remove, index } = props;
  return (
    <div className="compare-product-card position-relative">
      <span
        className="position-absolute cross img-fluid"
        onClick={() => {
          remove(index);
        }}
      >
        <AiOutlineClose />
      </span>
      <div className="product-card-image">
        <img src="images/watch.jpg" alt="watch" />
      </div>
      <div className="compare-product-details">
        <h5 className="title">{data.title}</h5>
        <h5 className="price mt-3">$ {data.price}</h5>

        <div>
          <div className="product-detail">
            <h5>Brand:</h5>
            <p>{data.brand}</p>
          </div>
          <div className="product-detail">
            <h5>Type:</h5>
            <p>{data.category}</p>
          </div>
          <div className="product-detail">
            <h5>Availablity:</h5>
            <p>{data?.availablity}</p>
          </div>
          <div className="product-detail">
            <h5>Color:</h5>
            <Color colorData="red" />
          </div>
          <div className="product-detail">
            <h5>Star:</h5>
            <div className="d-flex gap-10">
              <ReactStars
                count={5}
                size={24}
                value={data.totalrating}
                edit={false}
                activeColor="#ffd700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCompare;
