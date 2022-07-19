import React from 'react';
import Header from '../../../../components/header/Header';
import {Image, StyleSheet, View} from 'react-native';
import images from '../../../../assets/images';

const PayGuide = () => {
  return (
    <View style={styles.container}>
      <Header title="Hướng dẫn thanh toán" backOption={true} />
      <View style={{width: '100%', marginTop: 30}}>
        <Image source={images.PAY} style={{width: '100%', height: 200}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PayGuide;
