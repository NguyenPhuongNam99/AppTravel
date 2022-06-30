import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/header/Header';
import images from '../../assets/images';

const Notification = () => {
  return (
    <View>
      <Header title="Thông báo" />
      <View style={styles.margin}>
        <TouchableOpacity style={styles.blockList}>
          <View style={styles.blockLeft}>
            <Image source={images.AVARTAR} style={styles.image} />
          </View>
          <View style={styles.blockRight}>
            <Text numberOfLines={1}>
              Bạn có muốn đi TP Hồ Chí Minh? OKGO có tất cả
            </Text>
            <Text>20/12/2019 lúc 10:30</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  margin: {marginTop: 16},
  blockList: {
    width: '100%',
    height: 56,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  blockLeft: {width: '15%'},
  image: {width: 34, height: 34},
  blockRight: {width: '85%'},
});

export default Notification;
