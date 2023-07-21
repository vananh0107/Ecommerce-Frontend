import React from 'react';

const FamousCard = (props) => {
  const img_class = props['img-class']
    ? props['img-class'] + ' img-fluid '
    : 'img-fluid';
  return (
    <div className={props.className}>
      <div className="famous-content">
        <h5 className={props['text-color']}>{props.categopry}</h5>
        <h6 className={props['text-color']}>{props.title}</h6>
        <p className={props['text-color']}>{props.desc}</p>
      </div>
      <img src={props.src} className={img_class} alt="famous" />
    </div>
  );
};

export default FamousCard;
