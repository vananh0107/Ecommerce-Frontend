import React, { useState } from 'react';
import Meta from '../../components/Meta';
import BreadCrumb from '../../components/BreadCrumb';
import BlogCard from '../../components/BlogCard';
import './Blog.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs, getCategoryBlog } from '../../features/blogs/blogSlice';
const Blogs = () => {
  let blogState = useSelector((state) => state?.blog.blog.blog);
  let categoryList = useSelector((state) => state?.blog.category);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    getBlogs();
  }, []);
  useEffect(() => {
    dispatch(getAllBlogs({ category }));
  }, [category]);
  const getBlogs = () => {
    dispatch(getAllBlogs());
    dispatch(getCategoryBlog());
  };
  return (
    <>
      <Meta title={'Blogs'} />
      <BreadCrumb title={'Blogs'} />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Blog Categories</h3>
                <div>
                  <ul className="ps-0">
                    {categoryList?.map((item, index) => {
                      return (
                        <li key={item&&item['_id']}onClick={() => setCategory(item.title)}>
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                {blogState?.map((item, index) => {
                  return (
                    <div className="col-6 mb-3" key={item&&item['_id']}>
                      <BlogCard data={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
