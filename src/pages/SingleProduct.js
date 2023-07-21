import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/Products/ProductFeature/ProductFeature';
import Color from '../components/Color';
import { BsShuffle, BsLink45Deg } from 'react-icons/bs';
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineDown,
  AiOutlineHeart,
  AiOutlineUp,
} from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { CiDeliveryTruck, CiRuler } from 'react-icons/ci';
import { BiHomeAlt2 } from 'react-icons/bi';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { SwiperSlide } from 'swiper/react';
import SwiperWrap from '../components/Products/Swipper/Swipper';
import {
  addRating,
  addToWishlist,
  getAProduct,
  getAllColor,
  getAllProducts,
} from '../features/products/productSlice';
import { addProdToCart, getUserCart } from '../features/user/userSlice';
const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [color, setColor] = useState(null);
  const location = useLocation();
  const getProductId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAProduct(getProductId));
  }, [getProductId]);
  const singleProductState = useSelector(
    (state) => state.product.singleProduct
  );
  useEffect(() => {
    dispatch(getAllProducts({ category: singleProductState?.category }));
    dispatch(getAllColor());
  }, [singleProductState]);
  const colorState = useSelector((state) => state?.product?.colorList);
  let cartState = useSelector((state) => state?.auth);
  let productsState = useSelector((state) => state?.product?.product);
  const dataColor = [];
  colorState?.forEach((element) => {
    singleProductState?.color?.forEach((color) => {
      if (element._id === color) dataColor.push({ title: element.title });
    });
  });
  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?._id) {
        setAlreadyAdded(true);
      }
    }
  }, []);
  const copyToClipboard = (text) => {
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };
  const handleOption = (e) => {
    console.log(e.target.querySelector('.down').classList);
    e.target.querySelector('.down').classList.toggle('d-none');
    e.target.querySelector('.up').classList.toggle('d-none');
    e.target.parentElement
      .querySelector('.product-data')
      .classList.toggle('d-block');
  };
  const handleCopy = () => {
    copyToClipboard(window.location.href);
  };
  const uploadCart = () => {
    if (color === null) {
      toast.error('Please choose color');
    } else {
      dispatch(
        addProdToCart({
          cart: [
            {
              _id: singleProductState?._id,
              color: color,
              price: singleProductState?.price,
              count: quantity,
              title: singleProductState?.title,
              description: singleProductState?.description,
            },
          ],
        })
      );
      dispatch(getUserCart());
    }
  };
  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);
  const addRatingToProduct = () => {
    if (star == null) {
      toast.error('Please add star rating');
      return false;
    } else if (comment == null) {
      toast.error('Please write review about the product');
      return false;
    } else {
      dispatch(
        addRating({ star: star, comment: comment, prodId: getProductId })
      );
    }
  };
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
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
  const [imgCurrent, setImgCurrent] = useState(null);
  return (
    <>
      <Meta title={singleProductState?.title} />
      <BreadCrumb title="Product Name" />
      <div className="py-5 home-wrapper-2">
        <div className="container-xxl main-product-wrapper p-4">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image position-relative">
                <p
                  className="col-4 position-absolute d-flex align-items-center justify-content-between w-100"
                  style={{
                    top: '50%',
                  }}
                >
                  <span className="btn-prev position-absolute">
                    <AiOutlineDoubleRight />
                  </span>
                  <span className="btn-next position-absolute">
                    <AiOutlineDoubleLeft />
                  </span>
                </p>
                <SwiperWrap
                  slidesPerView={1}
                  next={'.btn-prev'}
                  prev={'.btn-next'}
                >
                  {singleProductState?.images?.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img
                          src={item?.url}
                          alt={singleProductState?.title}
                          className="product-image-main img-fluid"
                        />
                      </SwiperSlide>
                    );
                  })}
                </SwiperWrap>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15 my-4 justify-content-center">
                {singleProductState?.images?.map((item, index) => {
                  return (
                    <img
                      src={item?.url}
                      alt={singleProductState?.title}
                      key={index}
                      style={{ width: '120px', height: '120px' }}
                    />
                  );
                })}
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h5 className="product-name">{singleProductState?.title}</h5>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ {singleProductState?.price}</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={singleProductState?.totalrating || 4}
                      activeColor="#ffd700"
                    />
                    <p className="p-bold mb-0 t-review">
                      Based on {singleProductState?.rating?.length + ' '}Reviews{' '}
                    </p>
                  </div>
                </div>
                <div className=" py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <p className="p-bold product-heading">Brand :</p>
                    <p className="p-color">{singleProductState?.brand}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <p className="p-bold product-heading">Category :</p>
                    <p className="p-color">{singleProductState?.category}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <p className="p-bold product-heading">Tags :</p>
                    <p className="p-color">{singleProductState?.tags}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <p className="p-bold product-heading">Availablity :</p>
                    <p className="p-color">In Stock</p>
                  </div>
                  <div className="d-flex flex-column mt-2 mb-3">
                    <p className="d-flex gap-10">
                      <span className="p-bold product-heading">Color :</span>
                      <Color setColor={setColor} data={dataColor} />
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <p className="p-bold product-heading">Quantity :</p>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: '60px' }}
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button
                        className="button border-0"
                        data-bs-toggle={color ? /*'modal'*/ '' : ''}
                        data-bs-target={color ? /*'#staticBackdrop'*/ '' : ''}
                        type="button"
                        onClick={() => {
                          uploadCart();
                        }}
                      >
                        Add to Cart
                      </button>
                      <Link className="button signup" to="/checkout">
                        Buy It Now
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15 mb-5 mt-3">
                    <div>
                      <span
                        className="p-bold product-method-option"
                        onClick={() => {
                          addToCompare(singleProductState);
                        }}
                      >
                        <BsShuffle className="fs-5 me-2" /> Add to Compare
                      </span>
                    </div>
                    <div>
                      <span
                        className="p-bold product-method-option"
                        onClick={() => {
                          addToWish(getProductId);
                        }}
                      >
                        <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <p
                      className="p-bold product-method-option position-relative"
                      onClick={handleOption}
                    >
                      <CiDeliveryTruck className="fs-5 me-2" /> Shipping &
                      Returns
                      <AiOutlineDown className="position-absolute product-method-desc down" />
                      <AiOutlineUp className="position-absolute product-method-desc d-none up" />
                    </p>
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br />
                      We ship all US domestic orders within
                      <b> 5-10 business days!</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 flex-column  my-3">
                    <p
                      className="p-bold product-method-option position-relative"
                      onClick={handleOption}
                    >
                      <BiHomeAlt2 className="fs-5 me-2" /> Material
                      <AiOutlineDown className="position-absolute product-method-desc" />
                    </p>
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br />
                      We ship all US domestic orders within
                      <b> 5-10 business days!</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 flex-column  my-3">
                    <p
                      className="p-bold product-method-option position-relative"
                      onClick={handleOption}
                    >
                      <AiOutlineHeart className="fs-5 me-2" /> Add to wishlist
                      <AiOutlineDown className="position-absolute product-method-desc" />
                    </p>
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br />
                      We ship all US domestic orders within
                      <b> 5-10 business days!</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 flex-column  my-3">
                    <p
                      className="p-bold product-method-option position-relative"
                      onClick={handleOption}
                    >
                      <CiRuler className="fs-5 me-2" /> Dimension
                      <AiOutlineDown className="position-absolute product-method-desc" />
                    </p>
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br />
                      We ship all US domestic orders within
                      <b> 5-10 business days!</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <div
                      className="p-bold product-method-option position-relative"
                      onClick={() => {
                        handleCopy();
                      }}
                    >
                      <BsLink45Deg className="fs-5 me-2" /> Share
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container setStarclassName="description-wrapper py-5 home-wrapper-2">
        <div className="row p-4">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-4 box-shadow-2">
              <p
                className="p-color fs-6 single-prod-desc"
                dangerouslySetInnerHTML={{
                  __html: singleProductState?.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="reviews-wrapper home-wrapper-2 pt-5">
        <div className="row ">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper p-4 bg-white box-shadow-2">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={singleProductState?.totalrating || 4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">
                      Based on {singleProductState?.rating?.length + ' '}Reviews{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="review-form pb-4">
                <h4 className="p-color my-4">Write a Review</h4>
                <form
                  action=""
                  onSubmit={addRatingToProduct}
                  className="d-flex flex-column gap-15"
                >
                  <div>
                    <p className="p-color fs-6">Rating</p>
                    <ReactStars
                      count={5}
                      size={24}
                      value={0}
                      edit={true}
                      activeColor="#ffd700"
                      onChange={(e) => {
                        setStar(e);
                      }}
                    />
                  </div>
                  <div>
                    <p className="p-color fs-6">Write your review (1500)</p>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control bg-white"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      className="button border-0 mt-3"
                      type="button"
                      onClick={addRatingToProduct}
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                {singleProductState?.rating?.map((item) => {
                  const day = new Date(item?.date);
                  return (
                    <div className="review">
                      <ReactStars
                        count={5}
                        size={24}
                        value={item?.star}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <div className="mb-0 d-flex">
                        <p className="p-bold comment-auth">{item?.name}</p>{' '}
                        <span className="p-color mx-1">on</span>
                        <p className="p-color text-danger mt-1">{`${day?.getDay()} ${
                          months[day?.getMonth()]
                        } ${day?.getFullYear()} `}</p>
                      </div>
                      <p className="mt-3 p-color fs-6">{item?.comment}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Related products </h3>
          </div>
        </div>
        <div className="row">
          {productsState &&
            productsState?.map((item, index) => {
              if (index < 6) {
                if (item?.title !== singleProductState?.title)
                  return <ProductCard index={index} item={item} />;
              }
            })}
        </div>
      </Container>
      {/* {color !== null ? (
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header py-2 border-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body py-0">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1 w-50">
                    <img
                      src={watch}
                      className="img-fluid"
                      alt="product imgae"
                    />
                  </div>
                  <div className="d-flex flex-column flex-grow-1 w-50">
                    <h6 className="mb-3">Apple Watch</h6>
                    <p className="mb-1">Quantity: asgfd</p>
                    <p className="mb-1">Color: asgfd</p>
                    <p className="mb-1">Size: asgfd</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0 py-0 justify-content-center gap-30">
                <Link to="/cart" className="button">
                  <p data-bs-dismiss="modal">View My Cart</p>
                </Link>
                <Link to="/checkout" className="button">
                  <p data-bs-dismiss="modal">Checkout</p>
                </Link>
              </div>
              <div className="d-flex justify-content-center py-3">
                <Link
                  className="text-dark"
                  to="/product"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  Continue To Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )} */}
    </>
  );
};

export default SingleProduct;
