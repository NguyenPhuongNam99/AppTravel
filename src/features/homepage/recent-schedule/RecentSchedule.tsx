import images from '../../../assets/images';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles';

const RecentSchedule = () => {
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
    <TouchableOpacity style={styles.scheduleContainer}>
      <View style={styles.topSchedule}>
        <View style={styles.topLeftSchedule}>
          <Image source={images.SCHEDULE_ONE} style={styles.imageSchedule} />
        </View>
        <View style={styles.topRightSchedule}>
          <View style={styles.topRightHeader}>
            <Image
              source={images.RIGHT_SCHEDULE}
              style={styles.imageSchedule}
            />
          </View>
          <View style={styles.topBottomSchedule}>
            <View style={styles.topBottomItem}>
              <Image
                source={images.BOTTOM_SCHEDULE}
                style={styles.imageSchedule}
              />
            </View>
            <View style={styles.topBottomItem}>
              <Image
                source={images.BOTTOM_SCHEDULE_ONE}
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
              Đà Lạt, Lâm Đồng <Text style={styles.textColor}>(5 ngày)</Text>
            </Text>
            <Text>Việt Nam</Text>
          </View>
          <View style={styles.bottomBlock}>
            <View style={styles.bottomLeft}>
              <Image source={images.AVARTAR} style={styles.imageAvatar} />
              <View style={styles.padding}>
                <Text>Ha AAnh</Text>
                <Text>10 giờ trước</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bottomRight}>
              <Text style={styles.price}>5,200,000 đ/ người</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default RecentSchedule;
