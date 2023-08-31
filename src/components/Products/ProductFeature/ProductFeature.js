import React, { useContext } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProductWrapper from '../GlobalStyleProduct/ProductWrapper';
import { ProdSpeContent } from '../PopularProduct/ProdPopularWrap';
import { useDispatch } from 'react-redux';
import './ProductFeature.scss';
import { addToWishlist } from '../../../features/products/productSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { addProdToCart, getUserCart } from '../../../features/user/userSlice';
const ProductCard = (props) => {
  const { grid, index, item } = props;
  let location = useLocation();
  const dispatch = useDispatch();
  const notIconAdd = useContext(ProdSpeContent);
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  const addToCompare = (data) => {
    let dataAlready = localStorage.getItem('productCompare');
    let newData;
    if (dataAlready) {
      newData = JSON.parse(dataAlready);
    } else {
      newData = [];
    }
    newData.push(JSON.stringify(data));
    localStorage.setItem('productCompare', JSON.stringify(newData));
  };
  const navigate = useNavigate();
  const [color, setColor] = useState(null);
  const uploadCart = (item) => {
    if (props.color === null) {
      toast.error('Please choose color');
    } else {
      dispatch(
        addProdToCart({
          cart: [
            {
              _id: item?._id,
              color: props.color,
              price: item?.price,
              count: 1,
              title: item?.title,
              description: item?.description,
            },
          ],
        })
      );
      dispatch(getUserCart());
    }
  };
  return (
    <ProductWrapper>
      <div
        key={index}
        className={` ${
          location.pathname === '/product'||props?.grid ? `gr-${grid}` : 'col-2'
        } `}
      >
        <div className="product-card position-relative">
          {notIconAdd ? (
            ''
          ) : (
            <div className="wishList-icon position-absolute">
              <div
                className="icon-add"
                onClick={(e) => {
                  addToWish(item?._id);
                }}
              >
                <img src="../../images/wish.svg" alt="wishList" />
              </div>
            </div>
          )}
          {props.discount ? (
            <span className="position-absolute number-discount">
              -{props.discount}%
            </span>
          ) : (
            <></>
          )}
          <Link to={`${'/product/' + item?._id}`} className="d-block">
            <div className="product-image py-3">
              <img src={item?.images[0]?.url} alt="product" />
              <img src={item?.images[1]?.url} alt="product" />
            </div>
          </Link>
          <div className="product-details">
            <h6 className="brand">{item?.brand}</h6>
            <h5 className="title">{item?.title}</h5>
            <ReactStars
              count={5}
              value={4}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p
              className={`description ${
                grid === 12 ? 'd-block' : 'd-none'
              } desc-product-card`}
              dangerouslySetInnerHTML={{ __html: item?.description }}
            ></p>
            {item?.discount ? (
              <p className="price">
                <span className="price-after-discount text-bg-danger">
                  $
                  {Math.round(
                    ((100 + Number(item?.discount)) / 100) * item.price
                  )}
                </span>
                <span className="price-default">${item?.price}</span>
              </p>
            ) : (
              <p className="price">${item?.price}</p>
            )}
          </div>
          {notIconAdd ? (
            ''
          ) : (
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <div
                  className="icon-add"
                  onClick={() => {
                    addToCompare(item);
                  }}
                >
                  <img src="../../images/prodcompare.svg" alt="" />
                </div>
                <div className="icon-add">
                  <img
                    onClick={() => {
                      navigate('/product/' + item?._id);
                    }}
                    src="../../images/view.svg"
                    alt=""
                  />
                </div>
                <div
                  className="icon-add"
                  onClick={() => {
                    uploadCart(item);
                  }}
                >
                  <img src="../../images/add-cart.svg" alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProductWrapper>
  );
};

export default ProductCard;
