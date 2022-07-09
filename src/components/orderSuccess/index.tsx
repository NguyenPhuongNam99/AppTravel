import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Modal} from 'react-native-paper';
import {useAppSelector, useAppDispatch} from '../../app/store';
import {setOpenModal} from '../../features/scheduleOverview/scheduleOverviewSlice';
import AppAntDesign from '../../components/icon/AppAntDesign';
import {useNavigation} from '@react-navigation/core';

interface TypeOrderSucees {
  title: string;
}

const OrderSuccess: React.FC<TypeOrderSucees> = ({title}) => {
  const openModal = useAppSelector(
    state => state.scheduleOverviewSlice.openModal,
  );
  const [visiable, setVisiable] = useState(openModal);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  //   setTimeout(() => {
  //     dispatch(setOpenModal(false));
  //   }, 2000);

  return (
    <Modal visible={visiable} onDismiss={() => dispatch(setOpenModal(false))}>
      <View style={styles.container}>
        <View style={styles.blockContent}>
          <AppAntDesign name="checkcircleo" color={'green'} size={48} />
          <Text
            style={{
              textAlign: 'center',
              paddingTop: 20,
              color: '#FF5F24',
              fontSize: 14,
            }}>
            Chúc mừng bạn đã đặt {title} thành công
          </Text>

          <TouchableOpacity
            onPress={() => (
              navigation.navigate('BottomTabNavigation' as never),
              dispatch(setOpenModal(false))
            )}
            style={{
              width: 120,
              height: 30,
              backgroundColor: '#FF5F24',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              marginTop: 25,
            }}>
            <Text style={{color: 'white'}}>Về Trang chủ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
  blockContent: {
    width: 220,
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
});
export default OrderSuccess;
