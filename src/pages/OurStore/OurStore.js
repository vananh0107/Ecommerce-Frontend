import React, { useState, useEffect } from 'react';
import Meta from '../../components/Meta';
import BreadCrumb from '../../components/BreadCrumb';
import Color from '../../components/Color';
import Container from '../../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllBrand,
  getAllColor,
  getAllProducts,
  getCategoryProduct,
} from '../../features/products/productSlice';
import './OurStore.scss';
import Pagination from '../../components/Pagination/Pagination';
import { useLocation } from 'react-router-dom';
const OurStore = () => {
  const [grid, setGrid] = useState(3);
  const productState = useSelector((state) => state?.product?.product);
  const colorState = useSelector((state) => state?.product?.colorList);
  const brandState = useSelector((state) => state?.product?.brandList);
  const categoryState = useSelector((state) => state?.product?.categoryProduct);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  //Filter States
  const [category, setCategory] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [tag, setTag] = useState(null);
  const [sort, setSort] = useState(null);
  const [brand, setBrand] = useState(null);
  const [color, setColor] = useState(null);
  const location = useLocation();
  useEffect(() => {
    let newBrands = brandState && [...brandState];
    let newCategory = categoryState && [...categoryState];
    let newTags = ['Special', 'Popular', 'Featured'];
    setBrands(newBrands);
    setCategories(newCategory);
    setTags(newTags);
  }, [brandState, categoryState]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllColor());
    dispatch(getAllBrand());
    dispatch(getCategoryProduct());
    dispatch(getAllProducts());
    setCategory(location.search.split('=')[1]);
  }, []);
  function handlChange(e) {
    document.querySelector('.grid .active').classList.remove('active');
    e.target.classList.add('active');
  }
  useEffect(() => {
    dispatch(
      getAllProducts({ sort, tag, brand, category, minPrice, maxPrice, color })
    );
  }, [sort, tag, brand, category, minPrice, maxPrice, color]);
  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title={'Our Store'} />
      <Container className="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0 mb-0">
                  {categories &&
                    [...new Set(categories)].map((item, index) => {
                      return (
                        <li
                          key={item&&item['_id']}
                          className="mt-1"
                          onClick={() => setCategory(item.title)}
                        >
                          {item.title}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div className="filter-option-wrapper">
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10 form-floating">
                  <span>$</span>
                  <input
                    type="email"
                    className="form-control-price col-5"
                    id="floatingInput"
                    placeholder="From"
                    onChange={(e) => {
                      setMinPrice(e.target.value);
                    }}
                  />
                  <span>$</span>
                  <input
                    type="email"
                    className="form-control-price col-5"
                    id="floatingInput1"
                    placeholder="To"
                    onChange={(e) => {
                      setMaxPrice(e.target.value);
                    }}
                  />
                </div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  <Color setColor={setColor} data={colorState} />
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Brands</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {brands &&
                    [...new Set(brands)].map((item, index) => {
                      return (
                        <span
                          key={item&&item['_id']}
                          className="product-tags-item p-color"
                          onClick={() => setBrand(item.title)}
                        >
                          {item.title}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {tags &&
                    [...new Set(tags)].map((item, index) => {
                      return (
                        <span
                          key={item&&item['_id']}
                          className="product-tags-item p-color"
                          onClick={() => setTag(item)}
                        >
                          {item}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: '100px' }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={'manula'}
                    className="form-control form-select"
                    id=""
                    onChange={(e) => {
                      setSort(e.target.value);
                    }}
                  >
                    <option value="title">Alphabetically, A-Z</option>
                    <option value="-title">Alphabetically, Z-A</option>
                    <option value="price">Price, low to high</option>
                    <option value="-price">Price, high to low</option>
                    <option value="createdAt">Date, old to new</option>
                    <option value="-createdAt">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={(e) => {
                        handlChange(e);
                        setGrid(3);
                      }}
                      src="../../images/gr4.svg"
                      className="d-block img-fluid active"
                      alt="grid"
                    />
                    <img
                      onClick={(e) => {
                        handlChange(e);
                        setGrid(4);
                      }}
                      src="../../images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={(e) => {
                        handlChange(e);
                        setGrid(6);
                      }}
                      src="../../images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={(e) => {
                        handlChange(e);
                        setGrid(12);
                      }}
                      src="../../images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <Pagination
                  itemsPerPage={12}
                  items={productState}
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
