import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../../components/header/Header';
import images from '../../../assets/images';
import {styles} from './styles';
import TitleBlock from '../../homepage/Title-block/TitleBlock';
import ListRencentSchedule from '../../recent-schedule-detail/ListRencentSchedule';
import {useNavigation} from '@react-navigation/core';

const InformationProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header title="Thông tin cá nhân" backOption={false} />
      <View style={styles.avatarContainer}>
        <View style={styles.leftAvatar}>
          <Image source={images.AVARTAR} style={styles.imageAvatar} />
          <Text style={styles.titleAvatar}>Nguyen Phuong Nam</Text>
        </View>
        <View style={styles.rightAvatar}>
          <TouchableOpacity
            style={styles.rightInfo}
            onPress={() =>
              navigation.navigate('UpdateInformationProfile' as never)
            }>
            <Text>Sửa thông tin cá nhân</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TitleBlock label="Lịch trình yêu thích" navigateScreen={'Discount'} />
      <ListRencentSchedule />
      <TitleBlock label="Lịch trình đã đặt" navigateScreen={'Discount'} />
      <ListRencentSchedule />
    </View>
  );
};

export default InformationProfile;
