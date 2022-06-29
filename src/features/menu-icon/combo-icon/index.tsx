import React from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import Header from '../../../components/header/Header';
import {styles} from './styles';
import TitleBlock from '../../homepage/Title-block/TitleBlock';
import ListPopularPlace from '../../../components/list-popolar-place/ListPopularPlace';
import ListHotelResort from '../../../components/list-hotel-resort';
import RecentSchedule from '../../homepage/recent-schedule/RecentSchedule';

const ComboIcon = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Header title="Combo" />
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
        <ListPopularPlace />
        <TitleBlock label="Combo giá rẻ" navigateScreen={'HotelResortDetail'} />
        <RecentSchedule />
      </View>
    </ScrollView>
  );
};

export default ComboIcon;
