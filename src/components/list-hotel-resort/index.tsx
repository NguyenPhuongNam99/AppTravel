import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import AppMaterIcon from '../icon/AppMaterialIcons';
import images from '../../assets/images';
import styles from '../../features/homepage/styles';
import {dataResortHotel} from '../../features/homepage/fake-data/FakeData';
import {useNavigation} from '@react-navigation/core';

interface TypeListHotelResort {
  data: any;
  restaurant?: boolean;
}

const ListHotelResort: React.FC<TypeListHotelResort> = ({data, restaurant}) => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      style={{height: 240}}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        const regex = /(<([^>]+)>)/gi;
        const result = item?.description?.replace(regex, '');
        return (
          <TouchableOpacity
            style={styles.hotelContainer}
            onPress={() =>
              restaurant == true ? navigation.navigate(
                'RestaurantIconDetail' as never,
                {item: item, hotel: true} as never,
              ): navigation.navigate(
                'HotelDetailv3' as never,
                {item: item, hotel: true} as never,
              )
            }>
            <View style={styles.hotelTop}>
              <Image
                defaultSource={{
                  uri: 'https://i.pinimg.com/736x/85/03/fa/8503fae3fc4810a28fac2f8913664749.jpg',
                }}
                source={{
                  uri:
                    restaurant == true
                      ? item?.images[0]?.image : (item?.image[0]?.image !== undefined
                        ? item?.image[0]?.image
                        : item?.image[1]?.image),
                }}
                style={styles.imageSchedule}
              />
            </View>
            <View style={styles.hotelBottom}>
              <View style={styles.bottomStar}>
                <Text numberOfLines={1} style={styles.colorBottom}>
                  {item.name}
                </Text>
                {/* <Image source={images.STAR} /> */}
              </View>
              <Text numberOfLines={2} style={styles.fontWeight}>
                {result}
              </Text>
              <View style={styles.row}>
                <AppMaterIcon name="place" color={'blue'} />
                <Text style={{fontSize: 11}}>{item.address_detail}</Text>
              </View>
              <Text style={styles.colorRed}>{item.price} đ/đêm</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ListHotelResort;
