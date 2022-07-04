import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import AppMaterIcon from '../icon/AppMaterialIcons';
import images from '../../assets/images';
import styles from '../../features/homepage/styles';
import {dataResortHotel} from '../../features/homepage/fake-data/FakeData';

const ListHotelResort = () => {
  return (
    <FlatList
      data={dataResortHotel}
      style={{height: 240}}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View style={styles.hotelContainer}>
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
          </View>
        );
      }}
    />
  );
};

export default ListHotelResort;
