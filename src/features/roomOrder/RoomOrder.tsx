import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppIonicons from '../../components/icon/AppIonicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { Base_Url } from '../../constants/const';
import Loading from '../../components/loading';
import { useAppSelector } from '../../app/store'
import { useIsFocused } from '@react-navigation/native';

const RoomOrder = () => {
  const navigation = useNavigation();
  const [idClick, setIdClick] = useState<any>();
  const [visiable, setVisiable] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false)
  const dataUser: any = useAppSelector((state) => state.LoginSlice.data);
  console.log('dd', dataUser?._id)
  const focus = useIsFocused();

  const getDetailRoomOfId = async () => {
    try {
      setLoading(true)
      const tokenNew = await AsyncStorage.getItem('storage_Key');

      const response = await axios.get(`${Base_Url}/v1/hotel/fill/1`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      });
      console.log('resposn', response.data)
      setData(response.data)
      setLoading(false)
      // setDataHomeStay(response.data);
    } catch (error) {
      setLoading(false)
      console.log('error', error);
    }
  }

  useEffect(() => {
    getDetailRoomOfId()
  }, [focus])

  console.log('click', idClick)

  const statusRoom = async () => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');
      const obj = {
        id: idClick.idHotel,
        idRoom: idClick.itemRoomOrder._id,
        statusRoom: false,
        user_room: dataUser?._id
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
        text1: 'Trả phòng thành công 👋',
      });

      setTimeout(() => {
        navigation.goBack()

      }, 2000);

    } catch (error) {
      Toast.show({
        type: 'success',
        text1: 'Trả phòng thất bại 👋',
      });
    }
  };

  console.log('id click', idClick)

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <AppIonicons
          name="arrow-back-outline"
          size={20}
          onPress={() => navigation.goBack()}
        />
        <Text>Khách sạn đã đặt phòng</Text>
        <Text></Text>
      </View>
      <View style={{ zIndex: 99 }}>
        <Toast />
      </View>
      {
        loading &&
        <Loading />
      }
      {
        data?.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({ item }) => {
              console.log('item', item)
              return (
                <View style={styles.blockList}>
                  <View style={styles.clickList}>
                    <View style={styles.topClick}>
                      <Image
                        style={styles.image}
                        source={{ uri: String(item.itemRoomOrder.room_thumbnail) }}
                      />
                    </View>
                    <View style={styles.bottomClick}>
                      <Text style={styles.bottomHeader}>
                        Tên phòng: {item.itemRoomOrder.room_name}
                      </Text>
                      <Text numberOfLines={1}>
                        Miêu tả phòng: {item.itemRoomOrder.room_description}
                      </Text>
                      <View style={styles.blockAccept}>
                        <Text>Gía: {item.itemRoomOrder.room_price} đồng</Text>
                        <Text style={styles.bottomHeader}>
                          Trạng thái: {item.itemRoomOrder.room_status === 'false' ? 'chờ xác nhận' : item.itemRoomOrder.room_status === 'xac nhan' ? item.itemRoomOrder.room_status : 'đã xác nhận'}
                        </Text>
                        {
                          item.itemRoomOrder.room_status === 'xac nhan' && <TouchableOpacity
                            style={styles.clickAccept}
                            onPress={() => (
                              setIdClick(item), setVisiable(!visiable)
                            )}>
                            <Text style={{ color: 'white' }}>Trả phòng</Text>
                          </TouchableOpacity>
                        }
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        )
          : (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Text>Bạn chưa đặt khách sạn nào !</Text>
            </View>
          )
      }

      <Modal visible={visiable} style={styles.modalContainer}>
        <View style={styles.blockContainer}>
          <Text style={{ color: 'black' }}>Xác nhận trả phòng !</Text>
          <TouchableOpacity style={styles.clickConfirm} onPress={statusRoom}>
            <Text style={{ color: 'white' }}>Xác nhận</Text>
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
  blockList: { width: '100%', height: 255, marginTop: 20, paddingHorizontal: 10 },
  clickList: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 9,
  },
  topClick: { width: '100%', height: '60%' },
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
  bottomHeader: { color: 'black', fontSize: 15 },
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

export default RoomOrder;
