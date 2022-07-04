import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './styles';
import images from '../../assets/images';
import {Destination12} from '../homepage/fake-data/FakeData';

const Place12 = () => {
  return (
    <View style={styles.container}>
      <Header title="Điểm đến tháng 12" />
      <FlatList
        data={Destination12}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.popularContainer}>
              <View style={styles.popularBlock}>
                {/* <View style={styles.position} /> */}
                <Image
                  source={item.image}
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
          );
        }}
      />
    </View>
  );
};

export default Place12;
