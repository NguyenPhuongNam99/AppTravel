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
import Icon from 'react-native-vector-icons/FontAwesome';

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
            <Text style={styles.colorOptionClick}>
              Xem gợi ý <Icon name="rocket" size={30} color="#900" />
            </Text>
          </TouchableOpacity>
        </View>
        <TitleBlock label="Khuyến mại" />
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
        <TitleBlock label="Lịch trình gần đây" />
        <RecentSchedule />
        <TitleBlock label="Địa điểm phổ biến" />
        <View style={styles.destinationPopolar}>
          <View style={styles.destinationBlock}>
            <Image
              source={images.DESTINATION_POPULAR}
              style={styles.imageSchedule}
            />
            <Text style={styles.titleDestination}>Lý Sơn, Quảng Ngãi</Text>
          </View>
        </View>
        <TitleBlock label="Trải nghiệm nổi bật" />
        <View
          style={{width: '100%', height: 200, marginLeft: 16, marginTop: 16}}>
          <View style={{width: 220, height: 200}}>
            <Image source={images.EXPERIENCE} style={styles.imageSchedule} />
          </View>
          <Text>Ngắm bình minh Phú Yên</Text>
          <Text style={{color: '#3076FE'}}>Phú Yên, Việt Nam</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;
