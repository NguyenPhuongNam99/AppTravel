import React from 'react';
import {Image, ScrollView, TextInput, View} from 'react-native';
import {styles} from './styles';
import Header from '../../../components/header/Header';
import images from '../../../assets/images';
import TitleBlock from '../../homepage/Title-block/TitleBlock';
import ListPopularPlace from '../../../components/list-popolar-place/ListPopularPlace';
import ListHotelResort from '../../../components/list-hotel-resort';
import {dataListPoPularPlace} from '../../homepage/fake-data/FakeData';

const HotelIcon = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header title="Khách sạn" />
        <View style={styles.searchContainer}>
          <View style={styles.searchblock}>
            <TextInput
              style={styles.fullWidth}
              placeholder={'Bạn muốn đi đâu?'}
              placeholderTextColor={'#828282'}
            />
          </View>
        </View>
        <View style={styles.bannerContainer}>
          <Image source={images.DISCOUNT_BACKGROUND} style={styles.fullWidth} />
        </View>
        <TitleBlock
          label="Gợi ý tại điểm đến"
          navigateScreen={'HotelResortDetail'}
        />
        <ListPopularPlace data={dataListPoPularPlace} />
        <TitleBlock
          label="Đề xuất cho bạn"
          navigateScreen={'HotelResortDetail'}
        />
        <ListHotelResort />
        <TitleBlock label="Homestay " navigateScreen={'HotelResortDetail'} />
        <ListHotelResort />
      </View>
    </ScrollView>
  );
};

export default HotelIcon;
