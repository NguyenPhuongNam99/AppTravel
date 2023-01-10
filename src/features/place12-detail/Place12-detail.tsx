import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from '../recent-schedule-detail/styles';
import ListRencentSchedule from '../recent-schedule-detail/ListRencentSchedule';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Base_Url } from '../../constants/const';

const Place12Detail = ({route}) => {
  const {dataPass, title} = route.params;
  const [data, setData] = useState([])
  console.log('title', dataPass)

  const getListAllTravel = async () => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');

      const response = await axios.get(`${Base_Url}/v1/tour/getAllTour`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      });

      const formatData = response.data.filter((item) => Number(item.item.city) === Number(dataPass.cityId));
      setData(formatData)
    } catch (error) {}
  };

  useEffect(() => {
    getListAllTravel()
  }, [])

  return (
    <View style={styles.container}>
      <Header title={`Tour ${title}`} backOption={true} />
      {data.length > 0 ? (
        <ListRencentSchedule passData={data} />
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Không có dữ liệu mà bạn tìm kiếm</Text>
        </View>
      )}
    </View>
  );
};

export default Place12Detail;
