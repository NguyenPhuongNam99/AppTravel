import AppIonicons from '../../../components/icon/AppIonicons';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import RenderHtml from 'react-native-render-html';

const RestaurantIconDetail = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
   const source = {
    html: `
${item?.description}`,
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.blockImageContainer}>
        <Image
          source={{uri: String(item.images[0].image)}}
          resizeMode="cover"
          style={styles.fullWidth}
        />

        <AppIonicons
          name="arrow-back-outline"
          size={20}
          color={'white'}
          style={styles.iconBack}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.backgroundPosition} />
        <View style={styles.blockInfo}>
          <View style={styles.containInfo}>
            <Text style={styles.textInfo}>Tên nhà hàng: {item.name}</Text>
            <Text style={styles.textInfo}>Địa chỉ: {item.address_detail}</Text>
            <Text style={styles.textInfo}>Khoảng giá: {item.price}</Text>
          </View>
        </View>
      </View>

      <View style={[styles.blockMap, {marginTop: 50}]}>
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
            source={{uri: String(item.images[1].image)}}
            resizeMode="cover"
            style={styles.fullWidth}
          />
        </View>
        <View style={styles.blockItem}>
          <Image
            source={{uri: String(item.images[2].image)}}
            resizeMode="cover"
            style={styles.fullWidth}
          />
        </View>
        <View style={styles.blockItem}>
          <Image
            source={{uri: String(item.images[3].image)}}
            resizeMode="cover"
            style={styles.fullWidth}
          />
        </View>
      </View>
      {/* <View style={styles.containerClick}>
        <TouchableOpacity style={styles.blockClick} >
          <Text style={{color: 'white'}}>Chọn phòng</Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.viewText}>
        <RenderHtml contentWidth={200} source={source} />
      </View>
    </ScrollView>
  );
};

export default RestaurantIconDetail;
