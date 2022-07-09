import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles';
import images from '../../../assets/images';
import {dataSpecialExperience} from '../fake-data/FakeData';
import {useNavigation} from '@react-navigation/core';

const SpecialExprienceHome = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={dataSpecialExperience}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.specialContainer}
            onPress={() =>
              navigation.navigate(
                'RecentScheduleDetailV2' as never,
                {item: item} as never,
              )
            }>
            <View style={styles.specialBlock}>
              <Image source={item.image} style={styles.specialImage} />
              <Text>{item.title}</Text>
              <Text style={styles.specialTitle}>{item.place}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default SpecialExprienceHome;
