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
import {setOpenModal} from '../../scheduleOverview/scheduleOverviewSlice';
import {useAppDispatch, useAppSelector} from '../../../app/store';
import OrderSuccess from '../../../components/orderSuccess';

const PopularPlaceDetailV2 = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const openModal = useAppSelector(
    state => state.scheduleOverviewSlice.openModal,
  );
  console.log('open new', openModal);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.blockImage}>
          <Image source={item.image} style={styles.fullWidth} />
          <View style={styles.position} />
          <View style={styles.viewContent}>
            <Text style={[styles.colorWhite, styles.headerTitle]}>
              {item.title}
            </Text>
            <Text style={styles.colorWhite}>{item.place}</Text>
          </View>
          <AppIonicons
            name="chevron-back-outline"
            color={'white'}
            size={20}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.infoContainer}>
            <View style={styles.infoBlock}>
              <Text style={styles.bold}>
                Địa chỉ : <Text style={styles.normal}>{item.place}</Text>
              </Text>
              <Text style={styles.bold}>
                Giờ mở cửa : <Text style={styles.normal}>{item.timeOpen}</Text>
              </Text>
              <Text style={styles.bold}>
                Giá vé : <Text style={styles.normal}>{item.price}</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.mapContainer}>
          <View style={styles.mapBlock}>
            <Image
              source={images.MAP}
              style={styles.fullWidth}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageBlock}>
            <View style={styles.blockImageContent}>
              <Image source={item.image1} style={styles.fullWidth} />
            </View>
            <View style={styles.blockImageContent}>
              <Image source={item.image2} style={styles.fullWidth} />
            </View>
            <View style={styles.blockImageContent}>
              <Image source={item.image3} style={styles.fullWidth} />
            </View>
          </View>
        </View>
        <View style={styles.blockContent}>
          <Text style={styles.lineHeight}>{item.textHeader}</Text>
        </View>
        <View style={styles.blockContent}>
          <Text style={styles.lineHeight}>{item.textContent}</Text>
        </View>
      </ScrollView>
      <View style={styles.clickFee}>
        <TouchableOpacity
          style={styles.blockFee}
          onPress={() => dispatch(setOpenModal(true))}>
          <Text style={styles.colorFee}>Đặt vé</Text>
        </TouchableOpacity>
      </View>
      {openModal && <OrderSuccess title={'vé'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    zIndex: 0,
  },
  blockImage: {width: '100%', height: 240},
  fullWidth: {width: '100%', height: '100%'},
  position: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  viewContent: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 99,
    paddingLeft: 16,
  },
  colorWhite: {color: 'white'},
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  infoContainer: {
    width: '100%',
    height: 90,
    position: 'absolute',
    bottom: -40,
    paddingHorizontal: 16,
  },
  infoBlock: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  bold: {fontWeight: 'bold'},
  normal: {fontWeight: 'normal'},
  mapContainer: {
    marginTop: 66,
    width: '100%',
    height: 140,
    paddingHorizontal: 16,
  },
  mapBlock: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
  },
  imageContainer: {
    width: '100%',
    height: 140,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  imageBlock: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blockImageContent: {
    width: '30%',
    height: '100%',
  },
  back: {position: 'absolute', top: '20%', left: '3%', zIndex: 99},
  blockContent: {
    width: '100%',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  lineHeight: {lineHeight: 19},
  clickFee: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockFee: {
    width: 100,
    height: 30,
    backgroundColor: '#FF5F24',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorFee: {
    color: 'white',
  },
});

export default PopularPlaceDetailV2;
