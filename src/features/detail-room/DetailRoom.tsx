import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppIonicons from '../../components/icon/AppIonicons';
import {useNavigation} from '@react-navigation/native';

const DetailRoom = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <AppIonicons
          name="arrow-back-outline"
          size={20}
          onPress={() => navigation.goBack()}
        />
        <Text>Chọn phòng</Text>
        <Text></Text>
      </View>

      <FlatList
        data={item.room}
        renderItem={({item}) => {
          return (
            <View style={styles.blockList}>
              <View style={styles.clickList}>
                <View style={styles.topClick}>
                  <Image
                    style={styles.image}
                    source={{uri: item.room_thumbnail}}
                  />
                </View>
                <View style={styles.bottomClick}>
                  <Text style={styles.bottomHeader}>
                    Tên phòng: {item.room_name}
                  </Text>
                  <Text numberOfLines={1}>
                    Miêu tả phòng: {item.room_description}
                  </Text>
                  <View style={styles.blockAccept}>
                    <Text>Gía: {item.room_price} đồng</Text>
                    <TouchableOpacity style={styles.clickAccept}>
                      <Text style={{color: 'white'}}>Chọn</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  blockList: {width: '100%', height: 240, marginTop: 20, paddingHorizontal: 10},
  clickList: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 9,
  },
  topClick: {width: '100%', height: '60%'},
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  bottomClick: {
    width: '100%',
    height: '40%',
    paddingHorizontal: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
  },
  bottomHeader: {color: 'black', fontSize: 15},
  blockAccept: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  clickAccept: {
    width: 80,
    height: 30,
    backgroundColor: '#FF5F24',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailRoom;
