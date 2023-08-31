import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../../features/blogs/blogSlice';
import { useEffect } from 'react';
import BlogCard from '../../components/BlogCard';
const BlogWrapper = () => {
  let blogState = useSelector((state) => state?.blog?.blog?.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Our Latest Blogs</h3>
        </div>
      </div>
      <div className="row">
        {blogState?.map((item, index) => {
          if (index < 4) {
            return (
            <div className="col-3" key={item&&item['_id']}>
                <BlogCard data={item} />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default BlogWrapper;
