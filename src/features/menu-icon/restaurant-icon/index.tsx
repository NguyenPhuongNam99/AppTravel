import React, { useEffect, useState } from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {styles} from './styles';
import Header from '../../../components/header/Header';
import TitleBlock from '../../homepage/Title-block/TitleBlock';
import ListPopularPlace from '../../../components/list-popolar-place/ListPopularPlace';
import ListHotelResort from '../../../components/list-hotel-resort';
import { Destination12} from '../../homepage/fake-data/FakeData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Base_Url } from '../../../constants/const';
import { useNavigation } from '@react-navigation/native';

const RestaurantIcon = () => {

  const navigation = useNavigation();
  const [dataHotel, setDataHotel] = useState();

    const getListAllHotel = async () => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');

      const response = await axios.get(`${Base_Url}/v1/restaurant/getAllRestaurant`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      });
      setDataHotel(response.data);
      // console.log('response new', response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getListAllHotel()
  }, [])
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Header title="Nhà hàng" backOption={false} />
        <View style={styles.searchContainer}>
          <View style={styles.searchblock}>
            <TextInput
              style={styles.fullWidth}
              placeholder={'Bạn muốn đi đâu?'}
              placeholderTextColor={'#828282'}
              onFocus={() => navigation.navigate('CitySearch' as never)}
            />
          </View>
        </View>
        <TitleBlock
          label="Gợi ý tại điểm đến"
          navigateScreen={'HotelResortDetail'}
        />
        <View style={{width: '100%', height: 220}}>
          <ListPopularPlace data={Destination12} />
        </View>
        <TitleBlock
          label="Đề xuất cho bạn"
          navigateScreen={'HotelResortDetail'}
        />
        <ListHotelResort data={dataHotel} restaurant={true} />
        <TitleBlock
          label="Nhà hàng cho gia đình"
          navigateScreen={'HotelResortDetail'}
        />
        {/* <ListHotelResort />
        <TitleBlock
          label="Cafe cho cặp đôi"
          navigateScreen={'HotelResortDetail'}
        />
        <ListHotelResort /> */}
      </View>
    </ScrollView>
  );
};

export default RestaurantIcon;
