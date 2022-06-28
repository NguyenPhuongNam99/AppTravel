import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Header from '../../components/header/Header';
import images from '../../assets/images';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';

const PlacePoplular = () => {
  return (
    <View style={styles.container}>
      <Header title="Địa điểm phổ biến" />
      <TouchableOpacity style={styles.popularContainer}>
        <View style={styles.popularBlock}>
          <View style={styles.position} />
          <Image
            source={images.POPULAR_PLACE}
            resizeMode={'stretch'}
            style={styles.imageBlock}
          />
          <Text style={styles.textTitle}>Lý Sơn</Text>
          <Text style={styles.textPlace}>
            <AppMaterIcon name="place" color={'#3076FE'} />
            Lý Sơn
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlacePoplular;
