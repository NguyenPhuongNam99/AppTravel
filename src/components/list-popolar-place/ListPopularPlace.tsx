import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from '../../features/homepage/styles';

const ListPopularPlace = data => {
  console.log('data new', data);
  return (
    <FlatList
      data={data.data}
      horizontal
      style={{height: 220}}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View style={styles.destinationPopolar}>
            <View style={styles.destinationBlock}>
              <Image
                source={item.image}
                style={styles.imageSchedule}
                resizeMode="cover"
              />
              <Text style={styles.titleDestination}>{item.title}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default ListPopularPlace;
