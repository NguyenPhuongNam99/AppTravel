import React, {useEffect, useState} from 'react';
import {Image, ScrollView, TextInput, View} from 'react-native';
import {styles} from './styles';
import Header from '../../../components/header/Header';
import images from '../../../assets/images';
import TitleBlock from '../../homepage/Title-block/TitleBlock';
import ListPopularPlace from '../../../components/list-popolar-place/ListPopularPlace';
import ListHotelResort from '../../../components/list-hotel-resort';
import {dataListPoPularPlace, Destination12} from '../../homepage/fake-data/FakeData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Base_Url} from '../../../constants/const';

const HotelIcon = () => {
  const [dataHotel, setDataHotel] = useState();
  const [dataHomeStay, setDataHomeStay] = useState();

  const getListAllHotel = async () => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');

      const response = await axios.get(`${Base_Url}/v1/hotel/getType`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      });
      setDataHotel(response.data);
      console.log('response new', response.data);
    } catch (error) {}
  };

    const getListAllHomeStay = async () => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');

      const response = await axios.get(`${Base_Url}/v1/hotel/getHomeStayType`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      });
      setDataHomeStay(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getListAllHotel();
    getListAllHomeStay();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header title="Khách sạn" backOption={false} />
        <View style={styles.searchContainer}>
          <View style={styles.searchblock}>
            <TextInput
              style={styles.fullWidth}
              placeholder={'Bạn muốn đi đâu?'}
              placeholderTextColor={'#828282'}
            />
          </View>
        </View>
        <View style={styles.bannerContainer}>
          <Image source={images.DISCOUNT_BACKGROUND} style={styles.fullWidth} />
        </View>
        <TitleBlock
          label="Gợi ý tại điểm đến"
          navigateScreen={'HotelResortDetail'}
        />
        <ListPopularPlace data={Destination12} />
        <TitleBlock
          label="Đề xuất cho bạn"
          navigateScreen={'HotelResortDetail'}
        />
        <ListHotelResort data={dataHotel} />
        <TitleBlock label="Homestay " navigateScreen={'HotelResortDetail'} />
        <ListHotelResort data={dataHomeStay} />
      </View>
    </ScrollView>
  );
};

export default HotelIcon;
