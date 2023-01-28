import React, { useEffect, useState } from 'react';
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
import { Destination12 } from './fake-data/FakeData';
import Carousel from 'react-native-banner-carousel';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Base_Url } from '../../constants/const';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../components/loading';
import { useAppSelector } from '../../app/store';
import Modal from "react-native-modal";

const HomePage = () => {
  const [dataVoucher, setDataVoucher] = useState();
  const [dataTravel, setDataTravel] = useState([]);
  const [dataHotel, setDataHotel] = useState([]);
  const [dataHomeStay, setDataHomeStay] = useState([]);
  const [travelPopular, setTravelPopular] = useState([]);
  const [dataBlog, setDataBlog] = useState();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [tourOneday, setTourOneDay] = useState([]);
  const [tourPopular, setTourPopular] = useState([]);
  const [visiable, setVisiable] = useState(false);

  const getListDiscount = async () => {
    const tokenNew = await AsyncStorage.getItem('storage_Key');
    try {
      const response = await axios.get(`${Base_Url}/v1/voucher/getAllVoucher`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      });
      setDataVoucher(response.data);
    } catch (error) { }
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
      setTourOneDay(response.data.filter(item => item.time_line.length < 2))
      setDataTravel(response.data);
    } catch (error) { }
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
    } catch (error) { }
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
      setDataBlog(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getTourPopular = async () => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');

      const response = await axios.get(
        'http://206.189.37.26:8080/v1/tour/getTourPopular',
        {
          headers: {
            Authorization: `Bearer ${tokenNew}`,
          },
        },
      );
      setTourPopular(response.data)

    } catch (error) {

    }
  }

  useEffect(() => {
    setLoading(true)
    getListDiscount();
    getListAllTravel();
    getListAllHotel();
    getListAllHomeStay();
    getAllBlog();
    getTourPopular();

    setTimeout(() => {
      setLoading(false)
    }, 1000);

    // setLoading(false)
    // fakeApi();
  }, []);

  const dataLogin: any = useAppSelector((state) => state.LoginSlice.data);
  console.log('dataaa', dataLogin?.first_name !== '' && dataLogin?.last_name !== '')

  useEffect(() => {
    if (dataLogin?.first_name === '' && dataLogin?.last_name === '') {
      console.log('run')
      setVisiable(true)
    }
  }, [])

  return (
    <>
      {
        dataLogin?.first_name === '' && dataLogin?.last_name === '' && !loading && (
          <Modal isVisible={visiable} style={{ flex: 1, zIndex: 100 }}>
            <View style={styles.modalContaierUpdate}>
              <View style={styles.modalBlock}>
                <Text>Bạn cần cập nhật thêm thông tin </Text>
                <TouchableOpacity style={styles.clickModal} onPress={() => (setVisiable(!visiable), navigation.navigate('UpdateInformationProfile' as never))}>
                  <Text style={styles.colorWhite}>Cập nhật</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )
      }
      {
        loading &&
        <Loading />
      }
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Header />
          <View style={styles.optionClickContainer}>
            <TouchableOpacity style={styles.optionClick} onPress={() => navigation.navigate('SuggestScreen' as never)}>
              <Text style={styles.colorOptionClick}>Xem gợi ý</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionClick} onPress={() => navigation.navigate('RecentScheduleDetail' as never, { passData: tourPopular, title: 'Tour nổi bật' } as never)}>
              <Text style={styles.colorOptionClick}>Tour nổi bật</Text>
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
                        source={{ uri: item.image_url }}
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
          {/* <TitleBlock
          label="Địa điểm phổ biến"
          navigateScreen={'PlacePoplular'}
        />
        <ListPopularPlace data={dataListPoPularPlace} />
        <TitleBlock
          label="Trải nghiệm nổi bật"
          navigateScreen={'SpecialExprience'}
        />
        <SpecialExprienceHome /> */}
          <TitleBlock
            label="Khách sạn"
            navigateScreen={'HotelResortDetail'}
            passData={dataHotel}
          />
          <ListHotelResort data={dataHotel} />
          <TitleBlock label="Điểm đến tháng 12" navigateScreen={'Place12'} />
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
            <Text style={{ color: 'black' }}>Bí kíp du lịch</Text>
            <Text style={{ fontSize: 11 }}>Chơi - ăn - ở như người địa phương</Text>
          </View>
          <FlatList
            data={dataBlog}
            horizontal
            style={{ marginLeft: 10 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.containerBlog} onPress={() => navigation.navigate('BlogDetail' as never, { item: item } as never)}>
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


          {
            tourOneday.length > 1 && (
              <>
                <TitleBlock
                  label="Tour 1 ngày"
                  navigateScreen={'RecentScheduleDetail'}
                  passData={tourOneday}
                />
                <RecentSchedule data={tourOneday} />
              </>
            )
          }
        </View>
      </ScrollView>
    </>

  );
};

export default HomePage;
