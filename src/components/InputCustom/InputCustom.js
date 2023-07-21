import React from 'react';
import './input.scss';
const InputCustom = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      className={
        props.col
          ? `form-control input-custom  ${props.col}`
          : 'form-control input-custom '
      }
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
};

export default InputCustom;
