import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
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
  const { _id, images, createdAt, title, description } = { ...props.data };
  const day = new Date(createdAt);
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          src={images[0]}
          className="img-fluid image-blog-card "
          alt="blog"
          style={{ height: '160px' }}
        />
      </div>
      <div className="blog-content">
        <p className="date">{`${day.getDay()} ${
          months[day.getMonth()]
        } ${day.getFullYear()} `}</p>
        <h5 className="title blog-title-home">{title}</h5>
        <p
          className="desc-blog-card mb-3"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <Link to={'/blog/' + _id} className="button">
          Readmore
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
