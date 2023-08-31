import React from 'react';

const Color = (props) => {
  return (
    <>
      <ul className="colors ps-0 mb-0">
        {props?.data?.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                backgroundColor: item.title,
                border: '1px solid rgb(183 155 156)',
                cursor: 'pointer',
              }}
              onClick={() => {
                props?.setColor(item['_id']);
              }}
            ></li>
          );
        })}
      </ul>
    </>
  );
};

export default Color;
