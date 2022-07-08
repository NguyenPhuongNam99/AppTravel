import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../features/homepage/styles';
import {useNavigation} from '@react-navigation/core';

const ListPopularPlace = data => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data.data}
      horizontal
      style={{height: 220}}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.destinationPopolar}
            onPress={() =>
              navigation.navigate(
                'PopularPlaceDetailV2' as never,
                {item: item} as never,
              )
            }>
            <View style={styles.destinationBlock}>
              <Image
                source={item.image}
                style={styles.imageSchedule}
                resizeMode="cover"
              />
              <Text style={styles.titleDestination}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ListPopularPlace;
