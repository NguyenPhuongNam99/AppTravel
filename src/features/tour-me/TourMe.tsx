import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../recent-schedule-detail/styles';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import AppIonicons from '../../components/icon/AppIonicons';
import {useNavigation} from '@react-navigation/core';
import {scheduleData} from '../homepage/fake-data/FakeData';
import axios from 'axios';
import {Base_Url} from '../../constants/const';
import {useAppSelector} from '../../app/store';

const TourMe = () => {
  const navigation = useNavigation();
  const [dataTour, setDataTour] = useState([]);
  const data: any = useAppSelector(state => state.LoginSlice.data);

  const fetchTourMe = async () => {
    try {
      const response = await axios.get(
        `${Base_Url}/v1/orderTour/getOrderTourofUser/${data._id}`,
      );
      console.log('response new', response.data);
      setDataTour(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    fetchTourMe();
  }, []);

  return (
    <FlatList
      data={dataTour}
      renderItem={itemList => {
        console.log('list', itemList.item.item.statusTour)
        return (
          <TouchableOpacity style={styles.scheduleContainer} onPress={() => {
            if(String(itemList.item.item.statusTour) === 'finish'){
              navigation.navigate('EvaluateTour' as never)
            }
          }}>
            <View style={styles.scheduleBlock}>
              <View style={styles.scheduleTop}>
                <View style={styles.topLeftSchedule}>
                  <Image
                    resizeMode="cover"
                    source={{
                      uri: itemList.item.item.item.thumbnail[0].url,
                    }}
                    style={styles.imageSchedule}
                  />
                </View>
                <View style={styles.topRightSchedule}>
                  <View style={styles.topRightTop}>
                    <Image
                      source={{
                        uri: itemList.item.item.item.thumbnail[1].url,
                      }}
                      style={styles.imageSchedule}
                    />
                  </View>
                  <View style={styles.topRightBottom}>
                    <View style={styles.bottomLeft}>
                      <Image
                        source={{
                          uri: itemList.item.item.item.thumbnail[2].url,
                        }}
                        style={styles.imageSchedule}
                      />
                    </View>
                    <View style={styles.bottomRight}>
                      <Image
                        source={{
                          uri: itemList.item.item.item.thumbnail[3].url,
                        }}
                        style={styles.imageSchedule}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.scheduleBottom}>
                <View style={styles.titleContainer}>
                  <Text style={styles.bold}>
                   {itemList.item.item.item.tour_name}
                    {/* ccc <Text style={styles.colorTime}>ss</Text> */}
                  </Text>
                  <View style={styles.destination}>
                    <AppMaterIcon name="place" color={'#3076FE'} />
                    <Text style={styles.colorPlace}>Việt Nam</Text>
                  </View>
                </View>
                <View style={styles.bottomBlock}>
                  <View style={styles.bottomLeft1}>
                    <Text numberOfLines={1}>{itemList.item.cityName}</Text>
                  </View>
                  <TouchableOpacity style={styles.bottomRight1}>
                    <Text style={styles.price}>cccc đ/ người</Text>
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

export default TourMe;
