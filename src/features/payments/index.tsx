import React from 'react';
import {View} from 'react-native';
import {StripeProvider} from '@stripe/stripe-react-native';
import PaymentDetail from './payment-detail';

const Payment = () => {
  return (
      <PaymentDetail />
  );
};

export default Payment;
