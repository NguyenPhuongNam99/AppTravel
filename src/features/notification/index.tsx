import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/header/Header';
import images from '../../assets/images';
import styles from '../homepage/styles';
import TourMe from '../tour-me/TourMe';

const Notification = () => {
  const data = [
    {
      id: '1',
      imageTopLeft: images.SCHEDULE_ONE,
      imageTopRight: images.RIGHT_SCHEDULE,
      imageRightLeft: images.BOTTOM_SCHEDULE,
      imageRight: images.BOTTOM_SCHEDULE_ONE,
      place: 'Đà Lạt, Lâm Đồng',
      time: '(5 ngày)',
      price: '5,200,000 đ/ người',
    },
  ];

  return (
    <>
      <Header title="Tour của bạn" backOption={false} />
      <TourMe />
      
    </>
  );
};

export default Notification;
