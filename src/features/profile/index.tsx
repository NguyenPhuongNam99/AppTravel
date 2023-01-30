import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import images from '../../assets/images';
import AppFeatherIcon from '../../components/icon/AppFeatherIcon';
import AppFoundation from '../../components/icon/AppFoundation';
import AppIonicons from '../../components/icon/AppIonicons';
import {useNavigation} from '@react-navigation/core';
import {useAppDispatch, useAppSelector} from '../../app/store';
import _ from 'lodash'

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const data: any = useAppSelector(state => state.LoginSlice.data);
  const imageDefault =
    'https://hri.com.vn/wp-content/uploads/2017/09/default-avatar-ginger-guy.png';

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.header}>
          <Text style={styles.bold}>Thông tin cá nhân</Text>
        </View>
      </SafeAreaView>
      <TouchableOpacity
        style={styles.headerInfo}
        onPress={() => navigation.navigate('InformationProfile' as never)}>
        <Image
          source={{
            uri: _.isEmpty(data.avatar_url) ? imageDefault : String(data.avatar_url),
          }}
          style={styles.imageAvatar}
        />
        <Text>{_.isEmpty(data.avatar_url) ? 'Fullname User' : data?.first_name + ' ' + data?.last_name}</Text>
      </TouchableOpacity>
      <View style={styles.blockList}>
        <TouchableOpacity style={styles.listView}>
          <View style={styles.listLeft}>
            <AppFeatherIcon name="file-text" size={22} color={'blue'} />
          </View>
          <View style={styles.listRight}>
            <Text>Lịch trình của tôi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listView}>
          <View style={styles.listLeft}>
            <AppFoundation name="burst-sale" size={27} color={'orange'} />
          </View>
          <View style={styles.listRight}>
            <Text>Khuyến mại</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listView}
          onPress={() => navigation.navigate('Favourite' as never)}>
          <View style={styles.listLeft}>
            <AppFoundation name="heart" size={25} color={'red'} />
          </View>
          <View style={styles.listRight}>
            <Text>Yêu thích</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listView}>
          <View style={styles.listLeft}>
            <AppFoundation name="star" size={27} color={'yellow'} />
          </View>
          <View style={styles.listRight}>
            <Text>Đánh giá</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listView}
          onPress={() => navigation.navigate('Setting' as never)}>
          <View style={styles.listLeft}>
            <AppIonicons name="ios-settings-sharp" size={22} />
          </View>
          <View style={styles.listRight1}>
            <Text>Cài đặt</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
