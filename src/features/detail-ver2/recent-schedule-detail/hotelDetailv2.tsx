import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../../assets/images';
import AppIonicons from '../../../components/icon/AppIonicons';
import {useNavigation} from '@react-navigation/core';
import {styles} from './styles';
import {setOpenModal} from '../../scheduleOverview/scheduleOverviewSlice';
import {useAppDispatch, useAppSelector} from '../../../app/store';
import OrderSuccess from '../../../components/orderSuccess';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import RenderHtml from 'react-native-render-html';

const HotelDetailv2 = ({route}) => {
  const navigation = useNavigation();
  const {item, hotel} = route?.params;

//   const source = {
//     html: `
// ${item?.item?.item?.description}`,
//   };
//   const dispatch = useAppDispatch();
//   const openModal = useAppSelector(
//     state => state.scheduleOverviewSlice.openModal,
//   );

  return (
    <>
      <View style={styles.container}>
        <ScrollView style={{marginBottom: 50}}>
          <View style={styles.blockImageContainer}>
            <Image
              source={{uri: item?.image[0]?.image}}
              resizeMode="cover"
              style={styles.fullWidth}
            />
            <View style={styles.viewPosition}>
              <Text style={styles.headerPosition}>{item.name}</Text>
              <Text style={styles.colorWhite}>
                <AppIonicons name="ios-location-outline" size={15} />
                {item.address_detail}
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
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={{
                ...StyleSheet.absoluteFillObject,
              }}
              region={{
                latitude: 21.030653,
                longitude: 105.84713,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}>
              <Marker
                coordinate={{
                  latitude: 21.030653,
                  longitude: 105.84713,
                }}
              />
            </MapView>
          </View>

          <View style={styles.blockImage}>
            <View style={styles.blockItem}>
              <Image
                source={{uri: item?.image[1]?.image}}
                resizeMode="cover"
                style={styles.fullWidth}
              />
            </View>
            <View style={styles.blockItem}>
              <Image
                source={{uri: item?.image[2]?.image}}
                resizeMode="cover"
                style={styles.fullWidth}
              />
            </View>
            <View style={styles.blockItem}>
              <Image
                source={{uri: item?.image[3]?.image}}
                resizeMode="cover"
                style={styles.fullWidth}
              />
            </View>
          </View>

          <View style={styles.viewText}>
            {/* <RenderHtml contentWidth={200} source={source} /> */}
          </View>
        </ScrollView>
      </View>
      <View style={styles.blockSubmit}>
        <View style={styles.leftSubmit}>
          <Text style={styles.colorLeftSubmit}>{item.price} d/ nguoi</Text>
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
                // dispatch(setOpenModal(true));
              }
            }}>
            <Text style={styles.colorWhite}>
              {!hotel ? 'Xem chi tiết' : 'Đặt phòng'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* {openModal && <OrderSuccess />} */}
    </>
  );
};

export default HotelDetailv2;
