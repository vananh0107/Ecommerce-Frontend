import axios from 'axios';
import { base_url, config } from '../../utils/axiosConfig';
const getProduct = async (data) => {
  const response = await axios.get(
    `${base_url}product?${data?.brand ? `brand=${data?.brand}&&` : ''}${
      data?.category ? `category=${data?.category}&&` : ''
    }${data?.color ? `color=${data?.color}&&` : ''}${
      data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ''
    }${data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ''}${
      data?.sort ? `sort=${data?.sort}&&` : ''
    }${data?.tag ? `tags=${data?.tag.toLowerCase()}&&` : ''}${
      data?.limit ? `limit=${data?.limit}&&` : ''
    }`
  );
  if (response.data) {
    return response.data;
  }
};
const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) {
    return response.data;
  }
};
const getCaProduct = async () => {
  const response = await axios.get(`${base_url}prodcategory`);
  if (response.data) {
    return response.data;
  }
};
const getCountQuantityCat = async () => {
  const response = await axios.get(`${base_url}prodcategory/count`);
  if (response.data) {
    return response.data;
  }
};
const rateProduct = async (data) => {
  const response = await axios.put(`${base_url}product/rating`, data, config);
  if (response.data) {
    return response.data;
  }
};
const addToWishList = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/wishList`,
    { prodId },
    config
  );
  if (response.data) {
    return response.data;
  }
};
const addToCompare = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/compare`,
    { prodId },
    config
  );
  if (response.data) {
    return response.data;
  }
};
const getAllColor = async () => {
  const response = await axios.get(`${base_url}product/color`);
  if (response.data) {
    return response.data;
  }
};
const getAllBrand = async () => {
  const response = await axios.get(`${base_url}brand`);
  if (response.data) {
    return response.data;
  }
};
export const productService = {
  getProduct,
  addToWishList,
  getSingleProduct,
  rateProduct,
  getCaProduct,
  addToCompare,
  getCountQuantityCat,
  getAllColor,
  getAllBrand,
};
