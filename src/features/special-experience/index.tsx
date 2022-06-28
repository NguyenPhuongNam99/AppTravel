import React from 'react';
import {Image, Text, View} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './styles';
import images from '../../assets/images';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';

const SpecialExprience = () => {
  return (
    <View style={styles.container}>
      <Header title="Trải nghiệm nổi bật" />
      <View style={styles.specialContainer}>
        <View style={styles.specialBlock}>
          <View style={styles.specialTop}>
            <Image source={images.EXPERIENCE_SPECIAL} style={styles.image} />
          </View>
          <View style={styles.specialBottom}>
            <Text>Ngắm bình minh Phú Yên</Text>
            <View style={styles.flex}>
              <AppMaterIcon name="place" color={'#3076FE'} />
              <Text>Phú Yên, Việt Nam</Text>
            </View>
            <Text style={styles.colorTitle}>Từ 1.000.000 đ</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SpecialExprience;
