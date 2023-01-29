import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../recent-schedule-detail/styles';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import AppIonicons from '../../components/icon/AppIonicons';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import { Base_Url } from '../../constants/const';
import { useAppSelector } from '../../app/store';
import { useIsFocused } from '@react-navigation/native';
import Loading from '../../components/loading/index';

const TourMe = () => {
  const navigation = useNavigation();
  const [dataTour, setDataTour] = useState([]);
  const data: any = useAppSelector(state => state.LoginSlice.data);
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false)

  const fetchTourMe = async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        `${Base_Url}/v1/orderTour/getOrderTourofUser/${data._id}`,
      );
      const filterData = response.data.filter((item) =>item.item.item ).filter((item) => item.item.statusTour === 'finish' )
      console.log('filteerrr', filterData)
      setDataTour(filterData);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchTourMe();
  }, [isFocused]);

  return (
    <>
      {
        <>
          {
            loading && (
              <Loading />
            )
          }
          {
            dataTour.length > 0 ? (
              <FlatList
                data={dataTour}
                renderItem={itemList => {
                  return (
                    <TouchableOpacity style={styles.scheduleContainer}>
                      <View style={styles.scheduleBlock}>
                        <View style={styles.scheduleTop}>
                          {itemList.item.item.statusTour === 'finish' && (
                            <TouchableOpacity
                              style={styles.iconContainer}
                              onPress={() => {
                                if (
                                  String(itemList.item.item.statusTour) === 'finish'
                                ) {
                                  navigation.navigate(
                                    'EvaluateTour' as never,
                                    { item: itemList } as never,
                                  );
                                }
                              }}>
                              <Image
                                source={{
                                  uri: 'https://as1.ftcdn.net/v2/jpg/01/01/23/02/1000_F_101230299_PNPvE82KSDpr6bOJ8ER9CRhe4DX6f8Kv.jpg',
                                }}
                                style={styles.iconEvaluate}
                              />
                            </TouchableOpacity>
                          )}

                          <View style={styles.topLeftSchedule}>
                            <Image
                              resizeMode="cover"
                              source={{
                                uri: String(itemList.item.item.item.thumbnail[0].url),
                              }}
                              style={styles.imageSchedule}
                            />
                          </View>
                          <View style={styles.topRightSchedule}>
                            <View style={styles.topRightTop}>
                              <Image
                                source={{
                                  uri: String(itemList.item.item.item.thumbnail[1].url),
                                }}
                                style={styles.imageSchedule}
                              />
                            </View>
                            <View style={styles.topRightBottom}>
                              <View style={styles.bottomLeft}>
                                <Image
                                  source={{
                                    uri: String(itemList.item.item.item.thumbnail[2].url),
                                  }}
                                  style={styles.imageSchedule}
                                />
                              </View>
                              <View style={styles.bottomRight}>
                                <Image
                                  source={{
                                    uri: String(itemList.item.item.item.thumbnail[3].url),
                                  }}
                                  style={styles.imageSchedule}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.scheduleBottom}>
                          <View style={styles.titleContainer}>
                            <View style={{ width: '70%', height: '100%' }}>
                              <Text style={styles.bold} numberOfLines={1}>
                                {itemList.item.item.item.tour_name}
                              </Text>
                            </View>
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
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              width: '100%',
                            }}>
                            <Text>
                              Trạng thái:{' '}
                              {itemList.item.item.statusTour === 'finish'
                                ? 'hoàn thành'
                                : itemList.item.item.statusTour}
                            </Text>
                            <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                              <AppIonicons name="heart-outline" size={20} />
                              {/* heart-sharp */}
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Không có dữ liệu</Text>
              </View>
            )

          }
        </>




      }
    </>
  );
};

export default TourMe;
