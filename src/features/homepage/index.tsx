import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Header from './header/Header';
import images from '../../assets/images';
import {dataMenuIcon} from './fake-data/FakeData';
import TitleBlock from './Title-block/TitleBlock';
import RecentSchedule from './recent-schedule/RecentSchedule';
import ListPopularPlace from '../../components/list-popolar-place/ListPopularPlace';
import ListHotelResort from '../../components/list-hotel-resort';
import homePageApi from './homepageApi';

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
          <FlatList
            data={dataMenuIcon}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.listDiscount}
            renderItem={({item}) => {
              return (
                <View style={styles.discount}>
                  <Image source={images.DISCOUNT} />
                </View>
              );
            }}
          />
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
        <ListPopularPlace />
        <TitleBlock
          label="Trải nghiệm nổi bật"
          navigateScreen={'SpecialExprience'}
        />
        <View style={styles.specialContainer}>
          <View style={styles.specialBlock}>
            <Image source={images.EXPERIENCE} style={styles.specialImage} />
            <Text>Ngắm bình minh Phú Yên</Text>
            <Text style={styles.specialTitle}>Phú Yên, Việt Nam</Text>
          </View>
        </View>
        <TitleBlock label="Điểm đến tháng 12" navigateScreen={'Place12'} />
        <ListPopularPlace />
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
