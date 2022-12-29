import images from '../../../assets/images';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles';
import {scheduleData} from '../fake-data/FakeData';
import {useNavigation} from '@react-navigation/core';

interface TypeRecentSchedule {
  data: any;
}

const RecentSchedule: React.FC<TypeRecentSchedule> = ({data}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={itemList => {
        return (
          <TouchableOpacity
            style={styles.scheduleContainer}
            onPress={() =>
              navigation.navigate(
                'RecentScheduleDetailV2' as never,
                {item: data} as never,
              )
            }>
            <View style={styles.topSchedule}>
              <View style={styles.topLeftSchedule}>
                <Image
                  source={{uri: itemList.item.item.thumbnail[0].url}}
                  style={styles.imageScheduleFull}
                />
              </View>
              <View style={styles.topRightSchedule}>
                <View style={styles.topRightHeader}>
                  <Image
                    source={{uri: itemList.item.item.thumbnail[1].url}}
                    style={styles.imageScheduleFull}
                  />
                </View>
                <View style={styles.topBottomSchedule}>
                  <View style={styles.topBottomItem}>
                    <Image
                      source={{uri: itemList.item.item.thumbnail[2].url}}
                      style={styles.imageScheduleFull}
                    />
                  </View>
                  <View style={styles.topBottomItem}>
                    <Image
                      source={{uri: itemList.item.item.thumbnail[3].url}}
                      style={styles.imageScheduleFull}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bottomSchedule}>
              <View style={styles.blockBottomSchedule}>
                <View style={styles.bottomTop}>
                  <Text style={styles.weight600}>
                    {itemList.item.item.tour_name}
                    <Text style={styles.textColor}>(5 ngày)</Text>
                  </Text>
                  <Text>Việt Nam</Text>
                </View>
                <View style={styles.bottomBlock}>
                  <View style={styles.bottomLeft}>
                    <Text>10 giờ trước</Text>
                  </View>
                  <TouchableOpacity style={styles.bottomRight}>
                    <Text style={styles.price}>
                      {itemList.item.item.price} đ/ người
                    </Text>
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
