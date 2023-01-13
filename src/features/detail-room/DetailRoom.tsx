import React, {useState} from 'react';
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
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Modal} from 'react-native-paper';
import Toast from 'react-native-toast-message';

const DetailRoom = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const [idClick, setIdClick] = useState();
  const [visiable, setVisiable] = useState(false);

  console.log('item room', item)

  const statusRoom = async () => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');
      const obj = {
        id: item._id,
        idRoom: idClick,
      };
      const response = axios.put(
        'http://206.189.37.26:8080/v1/hotel/updateRoomStatus',
        obj,
        {
          headers: {
            Authorization: `Bearer ${tokenNew}`,
          },
        },
      );
      setVisiable(false);

      Toast.show({
        type: 'success',
        text1: 'Chọn Phòng thành công 👋',
      });
    } catch (error) {
      Toast.show({
        type: 'success',
        text1: 'Chọn Phòng thất bại 👋',
      });
    }
  };

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
      <View style={{zIndex: 99}}>
        <Toast />
      </View>
      <FlatList
        data={item.room.filter((item) => item.room_status == 'false')}
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
                    <TouchableOpacity
                      style={styles.clickAccept}
                      onPress={() => (
                        setIdClick(item._id), setVisiable(!visiable)
                      )}>
                      <Text style={{color: 'white'}}>Chọn</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />

      <Modal visible={visiable} style={styles.modalContainer}>
        <View style={styles.blockContainer}>
          <Text style={{color: 'black'}}>Xác nhận chọn phòng !</Text>
          <TouchableOpacity style={styles.clickConfirm} onPress={statusRoom}>
            <Text style={{color: 'white'}}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
  },
  blockContainer: {
    width: 200,
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
  },
  clickConfirm: {
    width: 120,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5F24',
    marginTop: 10,
  },
});

export default DetailRoom;
