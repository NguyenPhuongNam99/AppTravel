import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './styles';
import Header from './header/Header';
import TitleBlock from './Title-block/TitleBlock';
import RecentSchedule from './recent-schedule/RecentSchedule';
import ListPopularPlace from '../../components/list-popolar-place/ListPopularPlace';
import ListHotelResort from '../../components/list-hotel-resort';
import {Destination12} from './fake-data/FakeData';
import Carousel from 'react-native-banner-carousel';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Base_Url} from '../../constants/const';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const [dataVoucher, setDataVoucher] = useState();
  const [dataTravel, setDataTravel] = useState([]);
  const [dataHotel, setDataHotel] = useState([]);
  const [dataHomeStay, setDataHomeStay] = useState([]);
  const [travelPopular, setTravelPopular] = useState([]);
  const [dataBlog, setDataBlog] = useState();
  const navigation = useNavigation();

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

      setTravelPopular(
        response.data.filter(item => item.item.is_popular === 'true'),
      );
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

  const getAllBlog = async () => {
    const tokenNew = await AsyncStorage.getItem('storage_Key');

    try {
      const response = await axios.get(
        'http://206.189.37.26:8080/v1/blog/getAllBlog',
        {
          headers: {
            Authorization: `Bearer ${tokenNew}`,
          },
        },
      );
      console.log('response', response.data);
      setDataBlog(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getListDiscount();
    getListAllTravel();
    getListAllHotel();
    getListAllHomeStay();
    getAllBlog();
    // fakeApi();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <View style={styles.optionClickContainer}>
          <TouchableOpacity style={styles.optionClick}>
            <Text style={styles.colorOptionClick}>Xem g???i ??</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionClick}>
            <Text style={styles.colorOptionClick}>T???o l???ch tr??nh</Text>
          </TouchableOpacity>
        </View>
        <TitleBlock label="Khuy???n m???i" navigateScreen={'Discount'} />
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
          label="T???t c??? l???ch tr??nh"
          navigateScreen={'RecentScheduleDetail'}
          passData={dataTravel}
        />
        <RecentSchedule data={dataTravel} />
        <TitleBlock
          label="Danh m???c ph??? bi???n"
          navigateScreen={'RecentScheduleDetail'}
          passData={travelPopular}
        />
        <RecentSchedule data={travelPopular} />
        {/* <TitleBlock
          label="?????a ??i???m ph??? bi???n"
          navigateScreen={'PlacePoplular'}
        />
        <ListPopularPlace data={dataListPoPularPlace} />
        <TitleBlock
          label="Tr???i nghi???m n???i b???t"
          navigateScreen={'SpecialExprience'}
        />
        <SpecialExprienceHome /> */}
        <TitleBlock
          label="Kh??ch s???n"
          navigateScreen={'HotelResortDetail'}
          passData={dataHotel}
        />
        <ListHotelResort data={dataHotel} />
        <TitleBlock label="??i???m ?????n th??ng 12" navigateScreen={'Place12'} />
        <ListPopularPlace data={Destination12} />

        {dataHomeStay.length > 0 && (
          <>
            <TitleBlock
              label="HomeStay"
              navigateScreen={'HotelResortDetail'}
              passData={dataHomeStay}
            />
            <ListHotelResort data={dataHomeStay} />
          </>
        )}
        <View style={styles.blogTop}>
          <Text style={{color: 'black'}}>B?? k??p du l???ch</Text>
          <Text style={{fontSize: 11}}>Ch??i - ??n - ??? nh?? ng?????i ?????a ph????ng</Text>
        </View>
        <FlatList
          data={dataBlog}
          horizontal
          style={{marginLeft: 10}}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.containerBlog} onPress={() => navigation.navigate('BlogDetail' as never, {item : item} as never) }>
                <View style={styles.blogBottom}>
                  <View style={styles.blogImage}>
                    <Image
                      style={styles.fullWidth}
                      source={{
                        uri: item.thumbnail,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      paddingLeft: 10,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}>
                    <Text numberOfLines={1}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default HomePage;
