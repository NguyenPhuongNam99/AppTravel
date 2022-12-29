import React from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './styles';
import ListRencentSchedule from './ListRencentSchedule';

const RecentScheduleDetail = ({route}) => {
  const {passData} = route.params;

  return (
    <View style={styles.container}>
      <Header title="Lịch trình gần đây" backOption={true} />
      <ListRencentSchedule passData={passData}/>
    </View>
  );
};

export default RecentScheduleDetail;
