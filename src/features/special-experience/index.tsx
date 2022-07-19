import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './styles';
import images from '../../assets/images';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import {dataSpecialExperience} from '../homepage/fake-data/FakeData';

const SpecialExprience = () => {
  return (
    <View style={styles.container}>
      <Header title="Trải nghiệm nổi bật" backOption={true} />
      <FlatList
        data={dataSpecialExperience}
        renderItem={({item}) => {
          return (
            <View style={styles.specialContainer}>
              <View style={styles.specialBlock}>
                <View style={styles.specialTop}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.specialBottom}>
                  <Text>{item.title}</Text>
                  <View style={styles.flex}>
                    <AppMaterIcon name="place" color={'#3076FE'} />
                    <Text>{item.place}</Text>
                  </View>
                  <Text style={styles.colorTitle}>Từ {item.price}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SpecialExprience;
