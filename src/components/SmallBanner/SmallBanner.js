import React from 'react';
import './SmallBanner.scss';
const SmallBanner = (props) => {
  return (
    <div className="small-banner position-relative">
      <img src={props.src} className="img-fluid rounded-3" alt="main banner" />
      <div className="small-banner-content position-absolute">
        <h4>{props.title}</h4>
        <h5>{props.product}</h5>
        <p>
          {props.desc_pre} <br /> {props.desc_after}
        </p>
      </div>
    </div>
  );
};

export default SmallBanner;
