import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from '../../features/homepage/styles';
import images from '../../assets/images';

const ListPopularPlace = () => {
  const data = [
    {
      id: '1',
      title: 'Lý Sơn, Quảng Ngãi',
      image: images.DESTINATION_POPULAR,
    },
  ];

  return (
    <FlatList
      data={data}
      horizontal
      style={{height: 220}}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View style={styles.destinationPopolar}>
            <View style={styles.destinationBlock}>
              <Image source={item.image} style={styles.imageSchedule} />
              <Text style={styles.titleDestination}>{item.title}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default ListPopularPlace;
