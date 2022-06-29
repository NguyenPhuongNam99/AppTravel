import React from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {styles} from './styles';
import Header from '../../../components/header/Header';
import TitleBlock from '../../homepage/Title-block/TitleBlock';
import ListPopularPlace from '../../../components/list-popolar-place/ListPopularPlace';
import ListHotelResort from '../../../components/list-hotel-resort';

const RestaurantIcon = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Header title="Nhà hàng" />
        <View style={styles.searchContainer}>
          <View style={styles.searchblock}>
            <TextInput
              style={styles.fullWidth}
              placeholder={'Bạn muốn đi đâu?'}
              placeholderTextColor={'#828282'}
            />
          </View>
        </View>
        <TitleBlock
          label="Gợi ý tại điểm đến"
          navigateScreen={'HotelResortDetail'}
        />
        <View style={{width: '100%', height: 220}}>
          <ListPopularPlace />
        </View>
        <TitleBlock
          label="Đề xuất cho bạn"
          navigateScreen={'HotelResortDetail'}
        />
        <ListHotelResort />
        <TitleBlock
          label="Nhà hàng cho gia đình"
          navigateScreen={'HotelResortDetail'}
        />
        <ListHotelResort />
        <TitleBlock
          label="Cafe cho cặp đôi"
          navigateScreen={'HotelResortDetail'}
        />
        <ListHotelResort />
      </View>
    </ScrollView>
  );
};

export default RestaurantIcon;
