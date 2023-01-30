import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Header from '../../../components/header/Header';
import ListRencentSchedule from '../../recent-schedule-detail/ListRencentSchedule';
import { useAppSelector } from '../../../app/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../../components/loading/index';

const Favourite = () => {

  const dataUser = useAppSelector((state) => state.LoginSlice.data)

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  const getTourFavourite = async () => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');
      setLoading(true)
      const response = await axios.get(`http://206.189.37.26:8080/v1/tour/getTourFavouriteOfAllTour/${dataUser._id}`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      })
      setLoading(false)
      setData(response.data)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    getTourFavourite()
  }, [])

  return (
    <View style={{width: '100%', height: '100%'}}>
      <Header title="Yêu thích" backOption={false} />
      {/* {
        loading && <Loading />
      } */}
      <ListRencentSchedule passData={data} love={true} />
      {/* <Text>sss</Text> */}
    </View>
  );
};

export default Favourite;
