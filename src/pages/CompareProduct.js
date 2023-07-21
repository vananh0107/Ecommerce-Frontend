import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCompare from '../components/Products/ProductCompare/ProductCompare';
import Container from '../components/Container';
const CompareProduct = () => {
  const [getData, setData] = useState(localStorage.getItem('productCompare'));
  if (JSON.parse(getData).length > 0) {
    let data = JSON.parse(getData);
    const handleRemove = (index) => {
      data.splice(index, 1);
      localStorage.setItem('productCompare', JSON.stringify(data));
      setTimeout(() => {
        setData(localStorage.getItem('productCompare'));
      }, 200);
    };
    return (
      <>
        <Meta title={'Compare Products'} />
        <BreadCrumb title="Compare Products" />
        <Container className="compare-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            {data.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <ProductCompare
                    data={JSON.parse(item)}
                    remove={handleRemove}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </>
    );
  }
  return (
    <>
      <Meta title={'Compare Products'} />
      <BreadCrumb title="Compare Products" />
      <Container className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="text-center fs-6">No Data</div>{' '}
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
