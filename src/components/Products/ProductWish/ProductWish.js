import React from 'react';
import './ProductWish.scss';
import ProductCard from '../ProductFeature/ProductFeature';
const ProductWish = (props) => {
  const { _id, title, price, discount } = { ...props.data };
  const Handleremove = props.remove;
  return (
    <div className="wishlist-card position-relative">
      <img
        onClick={() => {
          Handleremove(_id);
        }}
        src="images/cross.svg"
        alt="cross"
        className="position-absolute cross img-fluid"
      />
      <ProductCard item={props.data } key={props.data&&props.data['_id']} grid='col-12'/>
      {/* <div className="py-3 px-3">
        <h5 className="title">{title}</h5>
        {discount ? (
          <p className="price">
            <span className="price-after-discount text-bg-danger">
              $
              {Number(
                Number(((100 - discount) / 100) * price.slice(1)).toFixed(2)
              )}
            </span>
            <span className="price-default">{price}</span>
          </p>
        ) : (
          <p className="price">{price}</p>
        )}
      </div> */}
    </div>
  );
};
export default ProductWish;
