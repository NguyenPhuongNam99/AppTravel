import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from '../styles';
import images from '../../../assets/images';
import {dataSpecialExperience} from '../fake-data/FakeData';

const SpecialExprienceHome = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={dataSpecialExperience}
      renderItem={({item}) => {
        return (
          <View style={styles.specialContainer}>
            <View style={styles.specialBlock}>
              <Image source={item.image} style={styles.specialImage} />
              <Text>{item.title}</Text>
              <Text style={styles.specialTitle}>{item.place}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default SpecialExprienceHome;
