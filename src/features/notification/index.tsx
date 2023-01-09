import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/header/Header';
import images from '../../assets/images';
import styles from '../homepage/styles';
import TourMe from '../tour-me/TourMe';

const Notification = () => {

  return (
    <>
      <Header title="Tour của bạn22" backOption={false} />
      <TourMe />
      
    </>
  );
};

export default Notification;
