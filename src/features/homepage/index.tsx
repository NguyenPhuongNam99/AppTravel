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
import AppMaterIcon from '../../components/icon/AppMaterialIcons';

const HomePage = () => {
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
        <View style={styles.destinationPopolar}>
          <View style={styles.destinationBlock}>
            <Image
              source={images.DESTINATION_POPULAR}
              style={styles.imageSchedule}
            />
            <Text style={styles.titleDestination}>Lý Sơn, Quảng Ngãi</Text>
          </View>
        </View>
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
        <View style={styles.destinationPopolar}>
          <View style={styles.destinationBlock}>
            <Image
              source={images.DESTINATION_POPULAR}
              style={styles.imageSchedule}
            />
            <Text style={styles.titleDestination}>Lý Sơn, Quảng Ngãi</Text>
          </View>
        </View>
        <TitleBlock
          label="Khách sạn & Resort"
          navigateScreen={'HotelResortDetail'}
        />
        <View style={styles.hotelContainer}>
          <View style={styles.hotelTop}>
            <Image source={images.HOTEL} style={styles.imageSchedule} />
          </View>
          <View style={styles.hotelBottom}>
            <View style={styles.bottomStar}>
              <Text style={styles.colorBottom}>Khách sạn</Text>
              <Image source={images.STAR} />
            </View>
            <Text style={styles.fontWeight}>The Herriott Hotel & Suite</Text>
            <View style={styles.row}>
              <AppMaterIcon name="place" color={'blue'} />
              <Text>Phước Mỹ, Đà Nẵng</Text>
            </View>
            <Text style={styles.colorRed}>500,000 đ/ đêm</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;
