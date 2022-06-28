import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Header from '../../components/header/Header';
import images from '../../assets/images';
import styles from './styles';

const Discount = () => {
  return (
    <View style={styles.container}>
      <Header title="Khuyến mại" />
      <TouchableOpacity style={styles.discountContainer}>
        <View style={styles.discountBlock}>
          <View style={styles.discountTop}>
            <Image source={images.DISCOUNT_BACKGROUND} style={styles.image} />
          </View>
          <View style={styles.discountBottom}>
            <Text numberOfLines={1}>
              Giảm 300K khi nhập mã MEGA để đặt khách sạn
            </Text>
            <Text style={styles.discountTime}>
              Thời gian áp dụng:{' '}
              <Text style={styles.discountTitle}>1/12 - 31/12</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Discount;
