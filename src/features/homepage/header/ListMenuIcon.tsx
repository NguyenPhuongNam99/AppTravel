import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {dataMenuIcon} from '../fake-data/FakeData';
import styles from '../styles';
import {useNavigation} from '@react-navigation/core';

const ListMenuIcon = () => {
  const navigation = useNavigation();

  const _onPress = item => {
    if (item.id === String(2)) {
      navigation.navigate('HotelIcon' as never);
    }
    if (item.id === String(5)) {
      navigation.navigate('RestaurantIcon' as never);
    }
    if (item.id === String(4)) {
      navigation.navigate('ComboIcon' as never);
    }
    if (item.id === String(1)) {
      navigation.navigate('Payment' as never);
    }
    if (item.id === String(3)) {
      navigation.navigate('Notification' as never);
    }
  };
  return (
    <View style={styles.listIcon}>
      <FlatList
        data={dataMenuIcon}
        horizontal
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 16,
              }}
              onPress={() => _onPress(item)}>
              <Image source={item.image} style={{width: 35, height: 35}} />
              <Text style={{color: 'white'}}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ListMenuIcon;
