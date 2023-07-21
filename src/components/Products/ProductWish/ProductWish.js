import React from 'react';
import './ProductWish.scss';
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
      <div className="wishlist-card-image">
        <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
      </div>
      <div className="py-3 px-3">
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
      </div>
    </div>
  );
};
export default ProductWish;
