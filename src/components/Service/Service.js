import React from 'react';

const Service = (props) => {
  return (
    <div className="d-flex align-items-center gap-15">
      <img src={props.src} alt="service" />
      <div>
        <h6>{props.title}</h6>
        <p className="mb-0">{props.desc}</p>
      </div>
    </div>
  );
};

export default Service;
