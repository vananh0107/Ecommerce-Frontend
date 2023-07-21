import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Meta from '../../components/Meta';
import blog from '../../images/blog-1.jpg';
import './Blog.scss';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBlog } from '../../features/blogs/blogSlice';
const SingleBlog = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const getBlogId = location.pathname.split('/')[2];
  useEffect(() => {
    dispatch(getSingleBlog(getBlogId));
  }, []);
  let blogState = useSelector((state) => state?.blog);
  return (
    <>
      <Meta title={'Dynamic Blog Name'} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex">
              <div className="col-3">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Shop By Categories</h3>
                  <div>
                    <ul className="ps-0">
                      <li>Home</li>
                      <li>Our Store</li>
                      <li>Blogs</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-blog-card col-9 mx-3">
                <div className="blog-infor">
                  <h3 className="title">
                    {blogState.singleblog?.getBlog?.title}
                  </h3>
                  <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
                  <p className="blog-content mb-0">
                    {blogState.singleblog?.getBlog?.description}
                  </p>
                  <p className="blog-desc">
                    <span className="blog-date">
                      {blogState.singleblog?.getBlog?.createdAt}
                    </span>
                    <span className="blog-auth">
                      {blogState.singleblog?.getBlog?.author}
                    </span>
                  </p>
                  <div className="mt-4 d-flex align-items-center justify-content-between">
                    <Link to="/blogs">
                      <HiOutlineArrowLeft className="fs-4" /> Back to Blogs
                    </Link>
                    <div className="share-social d-flex gap-10">
                      <Link to="/facebook">
                        <AiFillFacebook />
                      </Link>
                      <Link to="/instagram">
                        <AiFillInstagram />
                      </Link>
                      <Link to="/twitter">
                        <AiFillTwitterSquare />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog-comment col-12 p-4">
                  <h5 className="my-4">Leave a comment</h5>
                  <div className="d-flex justify-content-between mb-4">
                    <input
                      name="name"
                      placeholder="Name *"
                      type="text"
                      className="blog-input"
                    />
                    <input
                      name="email"
                      placeholder="Email *"
                      type="text"
                      className="blog-input"
                    />
                  </div>
                  <textarea
                    name="comment"
                    placeholder="Comment"
                    type="text"
                    className="col-12 blog-area"
                  />
                  <Link className="button my-4">Post Comment</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
