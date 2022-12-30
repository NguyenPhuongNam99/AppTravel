import React from 'react';
import {Image, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './styles';
import images from '../../assets/images';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import {dataResortHotel} from '../homepage/fake-data/FakeData';
import {useNavigation} from '@react-navigation/core';
import RenderHtml from 'react-native-render-html';

const HotelResortDetail = ({route}) => {
  const navigation = useNavigation();
  const {passData} = route.params;

  return (
    <View style={styles.container}>
      <Header title="Khách sạn & Resort" backOption={true} />
      <FlatList
        data={passData}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.hotelContainer}
              onPress={() =>
                navigation.navigate(
                  'HotelDetailv2' as never,
                  {item: item, hotel: true} as never,
                )
              }>
              <View style={styles.hotelBlock}>
                <View style={styles.hotelTop}>
                  <View style={styles.hotelTopLeft}>
                    <Image
                      source={{
                        uri:
                          item?.image[0]?.image !== undefined
                            ? item?.image[0]?.image
                            : item?.image[1]?.image,
                      }}
                      style={styles.image}
                    />
                  </View>
                  <View style={styles.topRightContainer}>
                    <View style={styles.topBlock}>
                      <Image
                        source={{
                          uri: item?.image[1]?.image,
                        }}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.bottomBlock}>
                      <View style={styles.bottomView}>
                        <Image
                          source={{
                            uri: item?.image[2]?.image,
                          }}
                          style={styles.image}
                        />
                      </View>
                      <View style={styles.bottomView}>
                        <Image
                          source={{
                            uri: item?.image[3]?.image,
                          }}
                          style={styles.image}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.hotelBottom}>
                  <View style={styles.bottomStar}>
                    <Text style={styles.colorBottom}>Khách sạn</Text>
                    {/* <Image source={images.STAR} /> */}
                  </View>
                  <Text style={styles.fontWeight}>{item.name}</Text>
                  <View style={styles.placeRow}>
                    <View style={styles.row}>
                      <AppMaterIcon name="place" color={'#3076FE'} />
                      <Text>{item.address_detail}</Text>
                    </View>
                    <Text style={{color: 'red'}}>Từ {item.price} đồng</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default HotelResortDetail;
