import React from 'react';
import {Image, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './styles';
import images from '../../assets/images';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import {dataResortHotel} from '../homepage/fake-data/FakeData';
import {useNavigation} from '@react-navigation/core';

const HotelResortDetail = () => {
  const navigation = useNavigation();

  return (
    // dataResortHotel
    <View style={styles.container}>
      <Header title="Khách sạn & Resort" backOption={true} />
      <FlatList
        data={dataResortHotel}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.hotelContainer}
              onPress={() =>
                navigation.navigate(
                  'RecentScheduleDetailV2' as never,
                  {item: item, hotel: true} as never,
                )
              }>
              <View style={styles.hotelBlock}>
                <View style={styles.hotelTop}>
                  <View style={styles.hotelTopLeft}>
                    <Image source={item.image} style={styles.image} />
                  </View>
                  <View style={styles.topRightContainer}>
                    <View style={styles.topBlock}>
                      <Image source={item.image1} style={styles.image} />
                    </View>
                    <View style={styles.bottomBlock}>
                      <View style={styles.bottomView}>
                        <Image source={item.image2} style={styles.image} />
                      </View>
                      <View style={styles.bottomView}>
                        <Image source={item.image3} style={styles.image} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.hotelBottom}>
                  <View style={styles.bottomStar}>
                    <Text style={styles.colorBottom}>Khách sạn</Text>
                    <Image source={images.STAR} />
                  </View>
                  <Text style={styles.fontWeight}>{item.title}</Text>
                  <View style={styles.placeRow}>
                    <View style={styles.row}>
                      <AppMaterIcon name="place" color={'#3076FE'} />
                      <Text>{item.place}</Text>
                    </View>
                    <Text style={{color: 'red'}}>Từ {item.price}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default HotelResortDetail;
