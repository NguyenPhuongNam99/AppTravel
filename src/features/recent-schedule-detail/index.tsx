import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './styles';
import images from '../../assets/images';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import AppIonicons from '../../components/icon/AppIonicons';

const RecentScheduleDetail = () => {
  return (
    <View style={styles.container}>
      <Header title="Lịch trình gần đây" />
      <View style={styles.scheduleContainer}>
        <View style={styles.scheduleBlock}>
          <View style={styles.scheduleTop}>
            <View style={styles.topLeftSchedule}>
              <Image
                resizeMode="cover"
                source={images.SCHEDULE_ONE}
                style={styles.imageSchedule}
              />
            </View>
            <View style={styles.topRightSchedule}>
              <View style={styles.topRightTop}>
                <Image
                  source={images.RIGHT_SCHEDULE}
                  style={styles.imageSchedule}
                />
              </View>
              <View style={styles.topRightBottom}>
                <View style={styles.bottomLeft}>
                  <Image
                    source={images.BOTTOM_SCHEDULE}
                    style={styles.imageSchedule}
                  />
                </View>
                <View style={styles.bottomRight}>
                  <Image
                    source={images.BOTTOM_SCHEDULE_ONE}
                    style={styles.imageSchedule}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.scheduleBottom}>
            <View style={styles.titleContainer}>
              <Text style={styles.bold}>
                Đà Lạt, Lâm Đồng <Text style={styles.colorTime}>(5 ngày)</Text>
              </Text>
              <View style={styles.destination}>
                <AppMaterIcon name="place" color={'#3076FE'} />
                <Text style={styles.colorPlace}>Việt Nam</Text>
              </View>
            </View>
            <View style={styles.bottomBlock}>
              <View style={styles.bottomLeft1}>
                <Image source={images.AVARTAR} style={styles.imageAvatar} />
                <View style={styles.padding}>
                  <Text>Ha AAnh</Text>
                  <Text>10 giờ trước</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.bottomRight1}>
                <Text style={styles.price}>5,200,000 đ/ người</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{alignSelf: 'flex-end'}}>
              <AppIonicons name="heart-outline" size={20} />
              {/* heart-sharp */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecentScheduleDetail;
