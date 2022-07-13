import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import images from '../../../assets/images';
import AppIonicons from '../../../components/icon/AppIonicons';
import {useNavigation} from '@react-navigation/core';
import {styles} from './styles';
import {setOpenModal} from '../../scheduleOverview/scheduleOverviewSlice';
import {useAppDispatch, useAppSelector} from '../../../app/store';
import OrderSuccess from '../../../components/orderSuccess';

const RecentScheduleDetailV2 = ({route}) => {
  const navigation = useNavigation();
  const {item, hotel} = route?.params;
  const dispatch = useAppDispatch();
  const openModal = useAppSelector(
    state => state.scheduleOverviewSlice.openModal,
  );

  return (
    <>
      <View style={styles.container}>
        <ScrollView style={{marginBottom: 50}}>
          <View style={styles.blockImageContainer}>
            <Image
              source={item.imageTopLeft || item.image}
              resizeMode="cover"
              style={styles.fullWidth}
            />
            <View style={styles.viewPosition}>
              <Text style={styles.headerPosition}>{item.title}</Text>
              <Text style={styles.colorWhite}>
                <AppIonicons name="ios-location-outline" size={15} />{' '}
                {item.place}
              </Text>
            </View>
            <AppIonicons
              name="arrow-back-outline"
              size={20}
              color={'white'}
              style={styles.iconBack}
              onPress={() => navigation.goBack()}
            />
            <View style={styles.backgroundPosition} />
          </View>

          <View style={styles.blockMap}>
            <Image
              source={images.MAP}
              style={styles.fullWidth}
              resizeMode="cover"
            />
          </View>

          <View style={styles.blockImage}>
            <View style={styles.blockItem}>
              <Image
                source={item.imageTopRight || item.image1}
                resizeMode="cover"
                style={styles.fullWidth}
              />
            </View>
            <View style={styles.blockItem}>
              <Image
                source={item.imageTopRightBottom || item.image2}
                resizeMode="cover"
                style={styles.fullWidth}
              />
            </View>
            <View style={styles.blockItem}>
              <Image
                source={item.imageTopLeftBottom || item.image3}
                resizeMode="cover"
                style={styles.fullWidth}
              />
            </View>
          </View>

          <View style={styles.viewText}>
            <Text style={styles.bold}>{item.headerText1}</Text>
            <Text style={styles.textTitle}>{item.textHeader1}</Text>
          </View>
          <View style={styles.viewText}>
            <Text style={styles.bold}>{item.headerText2}</Text>
            <Text style={styles.textTitle}>{item.textHeader2}</Text>
          </View>
          <View style={styles.viewText}>
            <Text style={styles.bold}>{item.HeaderText3}</Text>
            <Text style={styles.textTitle}>{item.textHeader3}</Text>
          </View>
          <View style={styles.viewText}>
            <Text style={styles.bold}>{item.HeaderText4}</Text>
            <Text style={styles.textTitle}>{item.textHeader4}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.blockSubmit}>
        <View style={styles.leftSubmit}>
          <Text style={styles.colorLeftSubmit}>{item.price}</Text>
        </View>
        <View style={styles.rightSubmit}>
          <TouchableOpacity
            style={styles.rightClick}
            onPress={() => {
              if (!hotel) {
                navigation.navigate(
                  'ScheduleOverview' as never,
                  {item: item} as never,
                );
              } else {
                dispatch(setOpenModal(true));
              }
            }}>
            <Text style={styles.colorWhite}>
              {!hotel ? 'Xem chi tiết' : 'Đặt phòng'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {openModal && <OrderSuccess />}
    </>
  );
};

export default RecentScheduleDetailV2;
