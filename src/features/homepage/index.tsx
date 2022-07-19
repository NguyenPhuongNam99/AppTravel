import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import styles from './styles';
import Header from './header/Header';
import images from '../../assets/images';
import {dataMenuIcon, dataDiscount} from './fake-data/FakeData';
import TitleBlock from './Title-block/TitleBlock';
import RecentSchedule from './recent-schedule/RecentSchedule';
import ListPopularPlace from '../../components/list-popolar-place/ListPopularPlace';
import ListHotelResort from '../../components/list-hotel-resort';
import homePageApi from './homepageApi';
import SpecialExprienceHome from './special-experience-home';
import {Destination12, dataListPoPularPlace} from './fake-data/FakeData';
import Carousel from 'react-native-banner-carousel';

const HomePage = () => {
  const _getListUser = async () => {
    try {
      const response = await homePageApi.getListUser();
      console.log('response new data ', response);
    } catch (error) {
      console.log('err new', error);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      _getListUser();
    }, 5000);
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
              {dataDiscount.map((item, index) => {
                return (
                  <View style={styles.discount}>
                    <Image
                      source={item.image}
                      resizeMode="cover"
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
          label="Lịch trình gần đây"
          navigateScreen={'RecentScheduleDetail'}
        />
        <RecentSchedule />
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
          label="Khách sạn & Resort"
          navigateScreen={'HotelResortDetail'}
        />
        <ListHotelResort />
      </View>
    </ScrollView>
  );
};

export default HomePage;
