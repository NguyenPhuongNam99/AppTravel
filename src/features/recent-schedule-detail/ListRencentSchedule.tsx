import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import AppIonicons from '../../components/icon/AppIonicons';
import {useNavigation} from '@react-navigation/core';
import {scheduleData} from '../homepage/fake-data/FakeData';

const ListRencentSchedule = ({passData}: any) => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={passData}
      renderItem={itemList => {
        return (
          <TouchableOpacity
            style={styles.scheduleContainer}
            onPress={() =>
              navigation.navigate(
                'RecentScheduleDetailV2' as never,
                {item: itemList} as never,
              )
            }>
            <View style={styles.scheduleBlock}>
              <View style={styles.scheduleTop}>
                <View style={styles.topLeftSchedule}>
                  <Image
                    resizeMode="cover"
                    source={{uri: itemList.item.item.thumbnail[0].url}}
                    style={styles.imageSchedule}
                  />
                </View>
                <View style={styles.topRightSchedule}>
                  <View style={styles.topRightTop}>
                    <Image
                      source={{uri: itemList.item.item.thumbnail[1].url}}
                      style={styles.imageSchedule}
                    />
                  </View>
                  <View style={styles.topRightBottom}>
                    <View style={styles.bottomLeft}>
                      <Image
                        source={{uri: itemList.item.item.thumbnail[2].url}}
                        style={styles.imageSchedule}
                      />
                    </View>
                    <View style={styles.bottomRight}>
                      <Image
                        source={{uri: itemList.item.item.thumbnail[3].url}}
                        style={styles.imageSchedule}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.scheduleBottom}>
                <View style={styles.titleContainer}>
                  <View style={{width: '65%'}}>
                    <Text style={styles.bold} numberOfLines={1}>
                      {itemList.item.item.tour_name}
                      <Text style={styles.colorTime}>ss</Text>
                    </Text>
                  </View>
                  <View style={{width: '35%'}}>
                    <View style={styles.destination}>
                      <AppMaterIcon name="place" color={'#3076FE'} />
                      <Text style={styles.colorPlace}>Việt Nam</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.bottomBlock}>
                  <View style={styles.bottomLeft1}>
                    <Text numberOfLines={1}>ss</Text>
                  </View>
                  <TouchableOpacity style={styles.bottomRight1}>
                    <Text style={styles.price}>
                      {itemList.item.item.price} đ/ người
                    </Text>
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
