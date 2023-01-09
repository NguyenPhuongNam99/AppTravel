import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Header from './header/Header';
import TitleBlock from './Title-block/TitleBlock';
import RecentSchedule from './recent-schedule/RecentSchedule';
import ListPopularPlace from '../../components/list-popolar-place/ListPopularPlace';
import ListHotelResort from '../../components/list-hotel-resort';
import SpecialExprienceHome from './special-experience-home';
import {Destination12, dataListPoPularPlace} from './fake-data/FakeData';
import Carousel from 'react-native-banner-carousel';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Base_Url} from '../../constants/const';

const HomePage = () => {
  const [dataVoucher, setDataVoucher] = useState();
  const [dataTravel, setDataTravel] = useState([]);
  const [dataHotel, setDataHotel] = useState([]);
  const [dataHomeStay, setDataHomeStay] = useState([]);
  const [travelPopular, setTravelPopular] = useState([])

  const getListDiscount = async () => {
    const tokenNew = await AsyncStorage.getItem('storage_Key');
    try {
      const response = await axios.get(`${Base_Url}/v1/voucher/getAllVoucher`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      });
      setDataVoucher(response.data);
    } catch (error) {}
  };

  const getListAllTravel = async () => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');

      const response = await axios.get(`${Base_Url}/v1/tour/getAllTour`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      });

      console.log('ress', response.data.filter((item) => item.item.is_popular === 'true'))
      setTravelPopular(response.data.filter((item) => item.item.is_popular === 'true'))
      setDataTravel(response.data);
    } catch (error) {}
  };

  const getListAllHotel = async () => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');

      const response = await axios.get(`${Base_Url}/v1/hotel/getType`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      });
      setDataHotel(response.data);
      // console.log('response new', response.data);
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
    getListDiscount();
    getListAllTravel();
    getListAllHotel();
    getListAllHomeStay();
    // fakeApi();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <View style={styles.optionClickContainer}>
          <TouchableOpacity style={styles.optionClick}>
            <Text style={styles.colorOptionClick}>Xem gợi ý</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionClick}>
            <Text style={styles.colorOptionClick}>Tạo lịch trình</Text>
          </TouchableOpacity>
        </View>
        <TitleBlock label="Khuyến mại" navigateScreen={'Discount'} />
        <View style={styles.blockDiscountContainer}>
          <View
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}>
            <Carousel autoplay autoplayTimeout={3000} loop index={0}>
              {dataVoucher?.map((item, index) => {
                return (
                  <View style={styles.discount}>
                    <Image
                      source={{uri: item.image_url}}
                      resizeMode="contain"
                      style={{
                        width: '91.7%',
                        height: '100%',
                        borderRadius: 6,
                      }}
                    />
                  </View>
                );
              })}
            </Carousel>
          </View>
        </View>
        <TitleBlock
          label="Tất cả lịch trình"
          navigateScreen={'RecentScheduleDetail'}
          passData={dataTravel}
        />
        <RecentSchedule data={dataTravel} />
        <TitleBlock
          label="Danh mục phổ biến"
          navigateScreen={'RecentScheduleDetail'}
          passData={travelPopular}
        />
        <RecentSchedule data={travelPopular} />
        <TitleBlock
          label="Địa điểm phổ biến"
          navigateScreen={'PlacePoplular'}
        />
        <ListPopularPlace data={dataListPoPularPlace} />
        <TitleBlock
          label="Trải nghiệm nổi bật"
          navigateScreen={'SpecialExprience'}
        />
        <SpecialExprienceHome />
        <TitleBlock label="Điểm đến tháng 12" navigateScreen={'Place12'} />
        <ListPopularPlace data={Destination12} />
        <TitleBlock
          label="Khách sạn"
          navigateScreen={'HotelResortDetail'}
          passData={dataHotel}
        />
        <ListHotelResort data={dataHotel} />
        {dataHomeStay.length >0 && (
          <>
            <TitleBlock
              label="HomeStay"
              navigateScreen={'HotelResortDetail'}
              passData={dataHomeStay}
            />
            <ListHotelResort data={dataHomeStay} />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default HomePage;
