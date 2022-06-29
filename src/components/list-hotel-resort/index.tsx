import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import AppMaterIcon from '../icon/AppMaterialIcons';
import images from '../../assets/images';
import styles from '../../features/homepage/styles';

interface TypeListHotelResort {
  id: string;
  title: string;
  headerTtile: string;
  place: string;
  price: string;
}

const ListHotelResort = () => {
  const data: Array<TypeListHotelResort> = [
    {
      id: '1',
      title: 'The Herriott Hotel & Suite',
      headerTtile: 'Khách sạn',
      place: 'Phước Mỹ, Đà Nẵng',
      price: '500,000 đ/ đêm',
    },
  ];
  return (
    <FlatList
      data={data}
      style={{height: 240}}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View style={styles.hotelContainer}>
            <View style={styles.hotelTop}>
              <Image source={images.HOTEL} style={styles.imageSchedule} />
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
