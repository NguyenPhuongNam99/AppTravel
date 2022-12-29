import React from 'react';
import {Image, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../components/header/Header';
import styles from './styles';
import {dataDiscount} from '../homepage/fake-data/FakeData';
import MapView from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Discount = ({route}) => {
  const {item} = route.params;
    console.log('response view', AsyncStorage.getItem('storage_Key'))

  return (
    <View style={styles.container}>
      <Header title="Khuyến mại" backOption={true} />
      <FlatList
        data={dataDiscount}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.discountContainer}>
              <View style={styles.discountBlock}>
                <View style={styles.discountTop}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.discountBottom}>
                  <Text numberOfLines={1}>{item.title}</Text>
                  <Text style={styles.discountTime}>
                    Thời gian áp dụng:{' '}
                    <Text style={styles.discountTitle}>{item.time}</Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {/* <MapView
        style={{width: 200, height: 200, backgroundColor: 'green'}}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled={true}
        showsUserLocation={true}
      /> */}
    </View>
  );
};

export default Discount;
