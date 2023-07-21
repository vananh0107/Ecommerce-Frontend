import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
const ShippingPolicy = () => {
  return (
    <>
      <Meta title={'Shippingg Policy'} />
      <BreadCrumb title="Shippingg Policy" />
      <Container classname="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
