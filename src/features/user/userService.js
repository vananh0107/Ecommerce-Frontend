import axios from 'axios';
import { base_url, config } from '../../utils/axiosConfig';
const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem('customer', JSON.stringify(response.data));
    }
    return response.data;
  }
};
const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem('customer', JSON.stringify(response.data));
    }
    return response.data;
  }
};
const getUserWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishList`, config);
  if (response.data) {
    return response.data;
  }
};
const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart`, cartData, config);
  if (response.data) {
    return response.data;
  }
};
const updateProdCart = async (cartDetail) => {
  const response = await axios.delete(
    `${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};
const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, config);
  if (response.data) {
    return response.data;
  }
};
const removePoductFromCart = async (inforItem) => {
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${inforItem.id}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};
const getApiLocation = async (cartItemId) => {
  const response = await axios.get(
    `https://provinces.open-api.vn/api/?depth=2`
  );
  if (response.data) {
    return response.data;
  }
};
const createOrder = async (orderData) => {
  const response = await axios.post(
    `${base_url}user/cart/cash-order`,
    orderData,
    config
  );
  if (response.data) {
    return response.data;
  }
};
const getUserOrders = async () => {
  const response = await axios.get(`${base_url}user/get-orders`, config);
  if (response.data) {
    return response.data;
  }
};
const forgotPassword = async (data) => {
  const response = await axios.post(`${base_url}user/forgot-password`, data);
  if (response.data) {
    return response.data;
  }
};
const resetPassword = async (data) => {
  const response = await axios.put(
    `${base_url}user/reset-password/${data.token}`,
    { password: data?.password }
  );
  if (response.data) {
    return response.data;
  }
};
export const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
  getCart,
  removePoductFromCart,
  updateProdCart,
  getApiLocation,
  createOrder,
  getUserOrders,
  forgotPassword,
  resetPassword,
};
