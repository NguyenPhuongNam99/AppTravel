import React from 'react';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {setOpenModal} from '../../scheduleOverview/scheduleOverviewSlice';
import {useAppDispatch, useAppSelector} from '../../../app/store';
import OrderSuccess from '../../../components/orderSuccess';

const PaymentDetail = () => {
  const {confirmPayment} = useStripe();
  const dispatch = useAppDispatch();
  const openModal = useAppSelector(
    state => state.scheduleOverviewSlice.openModal,
  );

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
        <Text style={{color: '#FF5F24', fontSize: 19}}>MOBILE BANKING</Text>
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
          onPress={() => dispatch(setOpenModal(true))}
          style={{
            width: '100%',
            height: 30,
            backgroundColor: '#FF5F24',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
          }}>
          <Text style={{color: 'white'}}>Thanh Toán </Text>
        </TouchableOpacity>
      </View>
      {openModal && <OrderSuccess />}
    </>
  );
};

export default PaymentDetail;
