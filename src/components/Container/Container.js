import React from 'react';

const Container = (props) => {
  return (
    <div className={props.className}>
      <div className="container-xxl">{props.children}</div>
    </div>
  );
};

export default Container;
