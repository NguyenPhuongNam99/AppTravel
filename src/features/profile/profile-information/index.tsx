import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../../components/header/Header';
import images from '../../../assets/images';
import { styles } from './styles';
import TitleBlock from '../../homepage/Title-block/TitleBlock';
import ListRencentSchedule from '../../recent-schedule-detail/ListRencentSchedule';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import { useAppSelector } from '../../../app/store'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../../components/loading/index'
import RecentSchedule from '../../homepage/recent-schedule/RecentSchedule';

const InformationProfile = () => {
  const navigation = useNavigation();
  const dataUser = useAppSelector((state) => state.LoginSlice.data);
  console.log('datauser', dataUser)
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);

  const getTourFavourite = async () => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');

      const response = await axios.get(`http://10.0.2.2:8080/v1/tour/getTourFavouriteOfAllTour/${dataUser._id}`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      })

      console.log('response', response.data)
      setData(response.data)
    } catch (error) {

    }
  }


  const fetUserId = async () => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');
      setLoading(true)
      const response = await axios.get(`http://10.0.2.2:8080/v1/user/userId/${dataUser._id}`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      })
      setUser(response.data)
      console.log('res', response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetUserId();
    getTourFavourite()
  }, [])
  return (
    <View style={styles.container}>
      <Header title="Thông tin cá nhân" backOption={false} />
      {
        loading &&
        <Loading />
      }
      <View style={styles.avatarContainer}>
        <View style={styles.leftAvatar}>
          <Image source={{ uri: user?.avatar_url }} style={styles.imageAvatar} />
          <Text style={styles.titleAvatar}>{user?.first_name + '  ' + user?.last_name}</Text>
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
      <View style={{marginTop: 30}}>
        <TitleBlock
          label="Lịch trình yêu thích"
          navigateScreen={'RecentScheduleDetail'}
          passData={data}
        />
        <RecentSchedule data={data} />
      </View>
     
    </View>
  );
};

export default InformationProfile;
