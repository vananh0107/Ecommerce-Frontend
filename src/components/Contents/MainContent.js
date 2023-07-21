import React from 'react';
import { Link } from 'react-router-dom';

const MainContent = (props) => {
  return (
    <div className="main-banner position-relative ">
      <img
        src={props.source}
        className="img-fluid rounded-3"
        alt="main banner"
      />
      <div className="main-banner-content position-absolute">
        <h4>SUPERCHARGED FOR PROS.</h4>
        <h5>iPad S13+ Pro.</h5>
        <p>From $999.00 or $41.62/mo.</p>
        <Link className="button">BUY NOW</Link>
      </div>
    </div>
  );
};

export default MainContent;
