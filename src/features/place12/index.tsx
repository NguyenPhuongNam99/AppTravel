import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './styles';
import images from '../../assets/images';

const Place12 = () => {
  return (
    <View style={styles.container}>
      <Header title="Điểm đến tháng 12" />
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

export default Place12;
