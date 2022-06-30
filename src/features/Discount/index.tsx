import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Header from '../../components/header/Header';
import images from '../../assets/images';
import styles from './styles';
import MapView from 'react-native-maps';

const Discount = () => {
  return (
    <View style={styles.container}>
      {/* <Header title="Khuyến mại" />
      <TouchableOpacity style={styles.discountContainer}>
        <View style={styles.discountBlock}>
          <View style={styles.discountTop}>
            <Image source={images.DISCOUNT_BACKGROUND} style={styles.image} />
          </View>
          <View style={styles.discountBottom}>
            <Text numberOfLines={1}>
              Giảm 300K khi nhập mã MEGA để đặt khách sạns
            </Text>
            <Text style={styles.discountTime}>
              Thời gian áp dụng:{' '}
              <Text style={styles.discountTitle}>1/12 - 31/12</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity> */}

      <MapView
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};

export default Discount;
