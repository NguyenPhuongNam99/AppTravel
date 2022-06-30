import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import images from '../../assets/images';
import AppIonicons from '../../components/icon/AppIonicons';

const DetailPlace = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blockImageContainer}>
        <Image
          source={images.SCHEDULE_ONE}
          resizeMode="stretch"
          style={styles.fullWidth}
        />
        <View style={styles.viewPosition}>
          <Text style={styles.headerPosition}>Khám phá Đảo bé</Text>
          <Text style={styles.colorWhite}>
            <AppIonicons name="ios-location-outline" size={15} /> Lý Sơn, Quảng
            Ngãi
          </Text>
        </View>
        <View style={styles.backgroundPosition} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blockImageContainer: {width: '100%', height: 240, backgroundColor: 'blue'},
  fullWidth: {width: '100%', height: '100%'},
  viewPosition: {position: 'absolute', bottom: 10, left: 10},
  headerPosition: {color: 'white', fontWeight: 'bold'},
  colorWhite: {color: 'white'},
  backgroundPosition: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
});
export default DetailPlace;
