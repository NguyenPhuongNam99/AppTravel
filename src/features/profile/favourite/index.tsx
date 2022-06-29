import React from 'react';
import {View} from 'react-native';
import Header from '../../../components/header/Header';
import ListRencentSchedule from '../../recent-schedule-detail/ListRencentSchedule';

const Favourite = () => {
  return (
    <View>
      <Header title="Yêu thích" />
      <ListRencentSchedule />
    </View>
  );
};

export default Favourite;
