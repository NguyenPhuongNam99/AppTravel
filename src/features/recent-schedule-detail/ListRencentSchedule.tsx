import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import AppIonicons from '../../components/icon/AppIonicons';
import {useNavigation} from '@react-navigation/core';
import {scheduleData} from '../homepage/fake-data/FakeData';

const ListRencentSchedule = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={scheduleData}
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
            <View style={styles.scheduleBlock}>
              <View style={styles.scheduleTop}>
                <View style={styles.topLeftSchedule}>
                  <Image
                    resizeMode="cover"
                    source={item.imageTopLeft}
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
                        source={item.imageTopLeftBottom}
                        style={styles.imageSchedule}
                      />
                    </View>
                    <View style={styles.bottomRight}>
                      <Image
                        source={item.imageTopRightBottom}
                        style={styles.imageSchedule}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.scheduleBottom}>
                <View style={styles.titleContainer}>
                  <Text style={styles.bold}>
                    {item.title}{' '}
                    <Text style={styles.colorTime}>{item.time}</Text>
                  </Text>
                  <View style={styles.destination}>
                    <AppMaterIcon name="place" color={'#3076FE'} />
                    <Text style={styles.colorPlace}>{item.place}</Text>
                  </View>
                </View>
                <View style={styles.bottomBlock}>
                  <View style={styles.bottomLeft1}>
                    <Text numberOfLines={1}>{item.description}</Text>
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
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ListRencentSchedule;
