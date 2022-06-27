import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {dataMenuIcon} from '../fake-data/FakeData';
import styles from '../styles';

const ListMenuIcon = () => {
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
              }}>
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
