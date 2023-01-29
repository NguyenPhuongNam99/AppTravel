import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Base_Url } from '../../constants/const';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { useAppSelector } from '../../app/store';
import { BillingDetails, CardField, confirmPayment } from '@stripe/stripe-react-native';
import Loading from '../../components/loading/index'

const ConfirmScreen = ({ route }) => {
  const { item } = route.params;
  const dataUserInfor: any = useAppSelector(state => state.LoginSlice.data);

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const imageDefault =
    'https://victoriatourist.com.vn/wp-content/uploads/2020/06/unnamed.png';


  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`http://206.189.37.26:8080/v1/stripe/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'usd',
        amount: item.item.item.price

      }),
    });
    const { clientSecret } = await response.json();

    return clientSecret;
  };

  const handlePayPress = async () => {
    setLoading(true);

    const billingDetails: BillingDetails = {
      email: dataUserInfor.email,
      name: dataUserInfor.first_name + ' ' + dataUserInfor.last_name,
      phone: dataUserInfor.phone_number
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
      const tokenNew = await AsyncStorage.getItem('storage_Key');
      const obj = {
        user_id: dataUserInfor?._id,
        tour_id: item.item.item.idTour,
        voucher_id: '',
        total_price: item.item.item.price,
        // status: 'cho xac nhan',
        payment_status: '',
        assyneBy: '',
        evaluate: '',
        fullName: dataUserInfor.first_name + ' ' + dataUserInfor.last_name,
        phoneUser: dataUserInfor.phone_number,
        tourName: item.item.item.tour_name,
        emailUser: dataUserInfor.email,
        status: 'chờ xác nhận '
      };
      const response = await axios.post(
        `${Base_Url}/v1/orderTour/createOrderTour`,
        obj,
        {
          headers: {
            Authorization: `Bearer ${tokenNew}`,
          },
        },
      );

      console.log('response data', response)
    
      setTimeout(() => {
        setLoading(false)
        Toast.show({
          type: 'success',
          text1: 'Bạn đã đặt Tour thành công 👋',
        });
        setTimeout(() => {
          navigation.navigate('HomePage' as never);
        }, 1000)
      }, 1000);
    }

    // Fetch the intent client secret from the backend.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Xác nhận đặt Tour</Text>
      <View style={{ zIndex: 99 }}>
        <Toast />
      </View>
      {loading && (
        <Loading />
      )}
      <View style={styles.imageHeader}>
        <Image
          resizeMode="contain"
          source={{ uri: String(imageDefault) }}
          style={{ height: 100 }}
        />
      </View>

      <View style={styles.blockInfor}>
        <Text style={styles.bold}>{item.item.item.tour_name}</Text>
        <Text>{item.item.nameCIty}</Text>
        <Text>Giá: {item.item.item.price}</Text>
      </View>

      <View style={{width: '100%', paddingHorizontal: 10}}>
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
      </View>

      <View style={styles.containerClick}>
        <TouchableOpacity
          style={styles.headerClick}
          onPress={() => handlePayPress()}>
          <Text style={{ color: 'white' }}>Xác nhận đặt tour</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 30,
    backgroundColor: 'green',
  },
  headerTitle: {
    // width: '100%',
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
  imageHeader: {
    width: '100%',
    height: 120,
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
  },
  blockInfor: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  bold: { fontWeight: 'bold' },
  headerClick: {
    width: 150,
    height: 40,
    backgroundColor: '#FF5F24',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerClick: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  loading: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 99,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});

export default ConfirmScreen;
