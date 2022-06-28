import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './styles';
import images from '../../assets/images';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';

const HotelResortDetail = () => {
  return (
    <View style={styles.container}>
      <Header title="Khách sạn & Resort" />
      <TouchableOpacity style={styles.hotelContainer}>
        <View style={styles.hotelBlock}>
          <View style={styles.hotelTop}>
            <View style={styles.hotelTopLeft}>
              <Image source={images.HOTEL} style={styles.image} />
            </View>
            <View style={styles.topRightContainer}>
              <View style={styles.topBlock}>
                <Image source={images.HOTEL1} style={styles.image} />
              </View>
              <View style={styles.bottomBlock}>
                <View style={styles.bottomView}>
                  <Image source={images.HOTEL2} style={styles.image} />
                </View>
                <View style={styles.bottomView}>
                  <Image source={images.HOTEL3} style={styles.image} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.hotelBottom}>
            <View style={styles.bottomStar}>
              <Text style={styles.colorBottom}>Khách sạn</Text>
              <Image source={images.STAR} />
            </View>
            <Text style={styles.fontWeight}>The Herriott Hotel & Suite</Text>
            <View style={styles.placeRow}>
              <View style={styles.row}>
                <AppMaterIcon name="place" color={'#3076FE'} />
                <Text>Phước Mỹ, Đà Nẵng</Text>
              </View>
              <Text style={{color: 'red'}}>Từ 850,000 đ/ đêm</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HotelResortDetail;
