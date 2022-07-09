import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import AppMaterIcon from '../icon/AppMaterialIcons';
import images from '../../assets/images';
import styles from '../../features/homepage/styles';
import {dataResortHotel} from '../../features/homepage/fake-data/FakeData';
import {useNavigation} from '@react-navigation/core';

const ListHotelResort = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={dataResortHotel}
      style={{height: 240}}
      horizontal
      showsHorizontalScrollIndicator={false}
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
            <View style={styles.hotelTop}>
              <Image source={item.image} style={styles.imageSchedule} />
            </View>
            <View style={styles.hotelBottom}>
              <View style={styles.bottomStar}>
                <Text style={styles.colorBottom}>{item.headerTtile}</Text>
                <Image source={images.STAR} />
              </View>
              <Text style={styles.fontWeight}>{item.title}</Text>
              <View style={styles.row}>
                <AppMaterIcon name="place" color={'blue'} />
                <Text>{item.place}</Text>
              </View>
              <Text style={styles.colorRed}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ListHotelResort;
