import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Header from '../../../components/header/Header';
import {useNavigation} from '@react-navigation/core';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header title="Cài đặt" />
      <View style={styles.listContainer}>
        <TouchableOpacity
          style={styles.listBlock}
          onPress={() => navigation.navigate('PrivacyPolicy' as never)}>
          <Text>Chính sách bảo mật</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listBlock}
          onPress={() => navigation.navigate('TermUse' as never)}>
          <Text>Điều khoản sử dụng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listBlock}
          onPress={() => navigation.navigate('PayGuide' as never)}>
          <Text>Hướng dẫn thanh toán</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listBlock1}>
          <Text>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;
