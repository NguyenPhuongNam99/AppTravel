import React from 'react';
import {Image, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './styles';
import Header from '../../components/header/Header';
import images from '../../assets/images';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import {dataListPoPularPlace} from '../homepage/fake-data/FakeData';

const PlacePoplular = () => {
  return (
    <View style={styles.container}>
      <Header title="Địa điểm phổ biến" />
      <FlatList
        data={dataListPoPularPlace}
        style={{marginBottom: 10}}
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
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text style={styles.textPlace}>
                  <AppMaterIcon name="place" color={'#3076FE'} />
                  {item.place}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default PlacePoplular;
