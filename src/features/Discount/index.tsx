import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Header from '../../components/header/Header';
import images from '../../assets/images';
import styles from './styles';
import {dataDiscount} from '../homepage/fake-data/FakeData';

const Discount = () => {
  return (
    <View style={styles.container}>
      <Header title="Khuyến mại" />
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
    </View>
  );
};

export default Discount;
