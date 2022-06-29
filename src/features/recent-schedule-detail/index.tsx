import React from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './styles';
import ListRencentSchedule from './ListRencentSchedule';

const RecentScheduleDetail = () => {
  return (
    <View style={styles.container}>
      <Header title="Lịch trình gần đây" />
      <ListRencentSchedule />
    </View>
  );
};

export default RecentScheduleDetail;
