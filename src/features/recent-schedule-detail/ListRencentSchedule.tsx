import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import images from '../../assets/images';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import AppIonicons from '../../components/icon/AppIonicons';

const ListRencentSchedule = () => {
  const data = [
    {
      id: '1',
      headerTitle: 'Đà Lạt, Lâm Đồng',
      time: '(5 ngày)',
      place: 'Việt Nam',
      title: 'Trải nghiệm vẻ đẹp của Đà Lạt',
      price: '5,200,000 đ/ người',
      imageTop: images.SCHEDULE_ONE,
      imageTopRight: images.RIGHT_SCHEDULE,
      imageRightLeft: images.BOTTOM_SCHEDULE,
      imageRight: images.BOTTOM_SCHEDULE_ONE,
    },
  ];
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View style={styles.scheduleContainer}>
            <View style={styles.scheduleBlock}>
              <View style={styles.scheduleTop}>
                <View style={styles.topLeftSchedule}>
                  <Image
                    resizeMode="cover"
                    source={item.imageTop}
                    style={styles.imageSchedule}
                  />
                </View>
                <View style={styles.topRightSchedule}>
                  <View style={styles.topRightTop}>
                    <Image
                      source={item.imageTopRight}
                      style={styles.imageSchedule}
                    />
                  </View>
                  <View style={styles.topRightBottom}>
                    <View style={styles.bottomLeft}>
                      <Image
                        source={item.imageRightLeft}
                        style={styles.imageSchedule}
                      />
                    </View>
                    <View style={styles.bottomRight}>
                      <Image
                        source={item.imageRight}
                        style={styles.imageSchedule}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.scheduleBottom}>
                <View style={styles.titleContainer}>
                  <Text style={styles.bold}>
                    {item.headerTitle}
                    <Text style={styles.colorTime}>{item.time}</Text>
                  </Text>
                  <View style={styles.destination}>
                    <AppMaterIcon name="place" color={'#3076FE'} />
                    <Text style={styles.colorPlace}>{item.place}</Text>
                  </View>
                </View>
                <View style={styles.bottomBlock}>
                  <View style={styles.bottomLeft1}>
                    <Text>{item.title}</Text>
                  </View>
                  <TouchableOpacity style={styles.bottomRight1}>
                    <Text style={styles.price}>{item.price}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                  <AppIonicons name="heart-outline" size={20} />
                  {/* heart-sharp */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

export default ListRencentSchedule;
