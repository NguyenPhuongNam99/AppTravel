import images from '../../../assets/images';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles';
import {scheduleData} from '../fake-data/FakeData';
import {useNavigation} from '@react-navigation/core';

const RecentSchedule = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: '1',
      imageTopLeft: images.SCHEDULE_ONE,
      imageTopRight: images.RIGHT_SCHEDULE,
      imageRightLeft: images.BOTTOM_SCHEDULE,
      imageRight: images.BOTTOM_SCHEDULE_ONE,
      place: 'Đà Lạt, Lâm Đồng',
      time: '(5 ngày)',
      price: '5,200,000 đ/ người',
    },
  ];

  return (
    <FlatList
      data={scheduleData}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.scheduleContainer}
            onPress={() =>
              navigation.navigate(
                'RecentScheduleDetailV2' as never,
                {item: item} as never,
              )
            }>
            <View style={styles.topSchedule}>
              <View style={styles.topLeftSchedule}>
                <Image
                  source={item.imageTopLeft}
                  style={styles.imageSchedule}
                />
              </View>
              <View style={styles.topRightSchedule}>
                <View style={styles.topRightHeader}>
                  <Image
                    source={item.imageTopRight}
                    style={styles.imageSchedule}
                  />
                </View>
                <View style={styles.topBottomSchedule}>
                  <View style={styles.topBottomItem}>
                    <Image
                      source={item.imageTopLeftBottom}
                      style={styles.imageSchedule}
                    />
                  </View>
                  <View style={styles.topBottomItem}>
                    <Image
                      source={item.imageTopRightBottom}
                      style={styles.imageSchedule}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bottomSchedule}>
              <View style={styles.blockBottomSchedule}>
                <View style={styles.bottomTop}>
                  <Text style={styles.weight600}>
                    {item.title}
                    <Text style={styles.textColor}>(5 ngày)</Text>
                  </Text>
                  <Text>Việt Nam</Text>
                </View>
                <View style={styles.bottomBlock}>
                  <View style={styles.bottomLeft}>
                    <Text>10 giờ trước</Text>
                  </View>
                  <TouchableOpacity style={styles.bottomRight}>
                    <Text style={styles.price}>5,200,000 đ/ người</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};
export default RecentSchedule;
