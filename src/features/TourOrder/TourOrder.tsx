import React from 'react';
import Header from '../../components/header/Header';
import TourOrderDetail from '../../features/tourOrder-detail/TourOrderDetail';

const TourOrder = () => {

  return (
    <>
      <Header title="Tour của bạn" backOption={false} />
      <TourOrderDetail />
      
    </>
  );
};

export default TourOrder;
