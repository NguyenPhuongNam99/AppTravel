import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from '../styles';

const UpdateInformationProfile = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.blockInformation}>
          <Text style={styles.cancel}>Hủy</Text>
          <Text style={styles.titleHeader}>Sửa thông tin cá nhân</Text>
          <Text style={styles.save}>Lưu</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default UpdateInformationProfile;
