import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Header from '../../../components/header/Header';
import ListRencentSchedule from '../../recent-schedule-detail/ListRencentSchedule';
import { useAppSelector } from '../../../app/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Favourite = () => {

  const dataUser = useAppSelector((state) => state.LoginSlice.data)

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

  useEffect(() => {
    getTourFavourite()
  }, [])

  return (
    <View>
      <Header title="Yêu thích" backOption={false} />
      <ListRencentSchedule passData={data} love={true} />
    </View>
  );
};

export default Favourite;
