import React from 'react';
import {View} from 'react-native';
import {StripeProvider} from '@stripe/stripe-react-native';
import PaymentDetail from './payment-detail';

const Payment = () => {
  return (
    <StripeProvider
      publishableKey={''}
      merchantIdentifier="merchant.identifier">
      <PaymentDetail />
    </StripeProvider>
  );
};

export default Payment;
