import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './styles';
import ListRencentSchedule from './ListRencentSchedule';

const RecentScheduleDetail = ({route}) => {
  const {passData, title} = route.params;

  console.log('title', title);

  return (
    <View style={styles.container}>
      <Header title={title ? title : 'Lịch trình gần đây'} backOption={true} />
      {passData.length > 0 ? (
        <ListRencentSchedule passData={passData} />
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Không có dữ liệu mà bạn tìm kiếm</Text>
        </View>
      )}
    </View>
  );
};

export default RecentScheduleDetail;
