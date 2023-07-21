import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { updateCartProduct } from '../../../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Color from '../../Color';

const CartProduct = (props) => {
  const [infor, setChange] = useState({
    quantity: null,
    priceTotal: null,
  });
  const dispatch = useDispatch();
  const handleQuantity = (quantity) => {
    dispatch(
      updateCartProduct({
        cartItemId: props.id,
        quantity: quantity,
      })
    );
  };
  return (
    <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center border-b">
      <div className="col-6 gap-15 d-flex align-items-center">
        <div className="w-26">
          <img src={props.src} className="img-fluid" alt="watch" />
        </div>
        <div className="w-74">
          <p className="p-color fs-6 mb-2 d-flex">
            Color:{' '}
            <span className="mx-1">
              <Color colorData={props.color}></Color>
            </span>
          </p>
          <p className="p-color fs-6 mb-2">Title: {props.title}</p>
          <p className="p-color fs-6 mb-2">Description: {props.description}</p>
        </div>
      </div>
      <div className="col-2 d-flex justify-content-end">
        <p className="price fs-5">${props.price}</p>
      </div>
      <div className="col-2 d-flex align-items-center justify-content-end gap-15">
        <div>
          <input
            className="form-control"
            type="number"
            name=""
            value={infor.quantity ? infor.quantity : props.quantity}
            style={{ width: '60px' }}
            min={1}
            max={10}
            id="quantity"
            onChange={(e) => {
              setChange({
                quantity: e.target.value,
                priceTotal: e.target.value * props.price,
              });
              handleQuantity(e.target.value);
            }}
          />
        </div>
        <div>
          <AiFillDelete
            className="text-danger "
            onClick={() => {
              props.delete(props.id, props.color);
            }}
          />
        </div>
      </div>
      <div className="col-2 d-flex justify-content-end">
        <p className="price-total fs-5">
          ${infor.priceTotal ? infor.priceTotal : props.price * props.quantity}
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
