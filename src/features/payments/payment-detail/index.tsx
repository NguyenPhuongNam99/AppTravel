import React from 'react';
import { BillingDetails, CardField, StripeProvider, useStripe } from '@stripe/stripe-react-native';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { setOpenModal } from '../../scheduleOverview/scheduleOverviewSlice';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import OrderSuccess from '../../../components/orderSuccess';

const PaymentDetail = () => {
  const { confirmPayment } = useStripe();
  const dispatch = useAppDispatch();
  const openModal = useAppSelector(
    state => state.scheduleOverviewSlice.openModal,
  );

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`http://206.189.37.26:8080/v1/stripe/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'usd',

      }),
    });
    const { clientSecret } = await response.json();

    return clientSecret;
  };

  const handlePayPress = async () => {
    const billingDetails: BillingDetails = {
      email: 'jenny.rosen@example.com',
    };

    // Fetch the intent client secret from the backend
    const clientSecretData = await fetchPaymentIntentClientSecret();

    // Confirm the payment with the card details
    const { paymentIntent, error } = await confirmPayment(clientSecretData, {
      paymentMethodType: 'Card',
      paymentMethodData: {
        billingDetails,
      },
    });

    if (error) {
      console.log('Payment confirmation error', error);
    } else if (paymentIntent) {
      console.log('Success from promise', paymentIntent);
    }

    // Fetch the intent client secret from the backend.
  };
  return (
    <> 
      <SafeAreaView />
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingHorizontal: 16,
          marginTop: 70,
        }}>
        <Text style={{ color: '#FF5F24', fontSize: 19 }}>MOBILE BANKING</Text>
        <CardField
          postalCodeEnabled={true}
          placeholders={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={cardDetails => {
            console.log('cardDetails', cardDetails);
          }}
          onFocus={focusedField => {
            console.log('focusField', focusedField);
          }}
        />
        <TouchableOpacity
          onPress={() => handlePayPress()}
          style={{
            width: '100%',
            height: 30,
            backgroundColor: '#FF5F24',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
          }}>
          <Text style={{ color: 'white' }}>Thanh Toán </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PaymentDetail;
