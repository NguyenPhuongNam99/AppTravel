import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import AppIonicons from '../../components/icon/AppIonicons';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppSelector } from '../../app/store';
import Loading from '../../components/loading/index';
import Toast from 'react-native-toast-message';

interface TypeListRecent {
  passData?: any;
  love?: boolean;
}

const ListRencentSchedule: React.FC<TypeListRecent> = ({ passData, love }) => {
  const navigation = useNavigation();
  const dataUser: any = useAppSelector((state) => state.LoginSlice.data);
  const [loading, setLoading] = useState(false)

  const submitFavourite = async (value1, value2) => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');
      const obj = {
        user_id: dataUser._id,
        tour_id: value1,
        _idTour: value2
      }

      const response = await axios.post('http://10.0.2.2:8080/v1/tourFavourite/createTourFavourite',
        obj,
        {
          headers: {
            Authorization: `Bearer ${tokenNew}`,
          },
        })
      console.log('response', response.data)
      Toast.show({
        type: 'success',
        text1: 'Bạn đã yêu thích'
      });
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <>

      <View style={{ zIndex: 99 }}>
        <Toast />{
          loading && <Loading />
        }
      </View>
      <FlatList
        data={passData}
        renderItem={itemList => {

          console.log('list', itemList.item.item._id, itemList.item.item.idTour)
          return (
            <TouchableOpacity
              style={styles.scheduleContainer}
              onPress={() =>
                navigation.navigate(
                  'RecentScheduleDetailV2' as never,
                  { item: itemList } as never,
                )
              }>
              <View style={styles.scheduleBlock}>
                <View style={styles.scheduleTop}>
                  <View style={styles.topLeftSchedule}>
                    <Image
                      resizeMode="cover"
                      source={{ uri: itemList.item.item.thumbnail[0].url }}
                      style={styles.imageSchedule}
                    />
                  </View>
                  <View style={styles.topRightSchedule}>
                    <View style={styles.topRightTop}>
                      <Image
                        source={{ uri: itemList.item.item.thumbnail[1].url }}
                        style={styles.imageSchedule}
                      />
                    </View>
                    <View style={styles.topRightBottom}>
                      <View style={styles.bottomLeft}>
                        <Image
                          source={{ uri: itemList.item.item.thumbnail[2].url }}
                          style={styles.imageSchedule}
                        />
                      </View>
                      <View style={styles.bottomRight}>
                        <Image
                          source={{ uri: itemList.item.item.thumbnail[3].url }}
                          style={styles.imageSchedule}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.scheduleBottom}>
                  <View style={styles.titleContainer}>
                    <View style={{ width: '65%' }}>
                      <Text style={styles.bold} numberOfLines={1}>
                        {itemList.item.item.tour_name}
                        <Text style={styles.colorTime}>ss</Text>
                      </Text>
                    </View>
                    <View style={{ width: '35%' }}>
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
                  <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                    {
                      love ? <AppIonicons name='heart' color={'red'} size={20} /> : <AppIonicons name="heart-outline" size={20} onPress={() => submitFavourite(itemList.item.item._id, itemList.item.item.idTour)} />

                    }
                    {/* heart-sharp */}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default ListRencentSchedule;
