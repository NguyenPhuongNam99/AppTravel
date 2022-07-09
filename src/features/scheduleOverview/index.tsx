import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/images';
import {styles} from './styles';
import {checkbackground, checkColor} from '../../Utils';
import TitleBlock from '../homepage/Title-block/TitleBlock';
import AppIonicons from '../../components/icon/AppIonicons';
import {useNavigation} from '@react-navigation/core';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import OrderSuccess from '../../components/orderSuccess';
import {useAppSelector, useAppDispatch} from '../../app/store';
import {setOpenModal} from './scheduleOverviewSlice';

const ScheduleOverview = ({route}) => {
  const {item} = route.params;
  const [indexData, setIndexData] = useState<number>(0);
  const navigation = useNavigation();
  const openModal = useAppSelector(
    state => state.scheduleOverviewSlice.openModal,
  );
  const dispatch = useAppDispatch();

  console.log('openModal', openModal);

  const dataMenuOverviewSchedule = [
    {
      id: '1',
      title: 'Lịch trình',
    },
    {
      id: '2',
      title: 'Di chuyển',
    },
    {
      id: '3',
      title: 'Khách sạn',
    },
    {
      id: '4',
      title: 'Thăm quan',
    },
  ];

  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={styles.safeView} /> */}
      <View style={styles.imageBlock}>
        <Image
          source={item?.imageTopLeft || item.image}
          resizeMode="cover"
          style={styles.fullwidth}
        />
        <Image source={images.AVARTAR} style={styles.avatar} />
        <AppIonicons
          name="chevron-back-outline"
          size={20}
          color={'white'}
          style={styles.back}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.titleAvatar}>
        <Text style={styles.bold}>{item.title}</Text>
        <Text>{item?.durationTime}</Text>
      </View>
      <View style={styles.blockMenuIcon}>
        <FlatList
          data={dataMenuOverviewSchedule}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[styles.menuClick, checkbackground(index, indexData)]}
                onPress={() => setIndexData(index)}>
                <Text style={checkColor(index, indexData)}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <TitleBlock
        label="Kế hoạch"
        navigateScreen={'DetailPlan'}
        passData={item}
      />

      <View style={styles.planContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.blockviewPlan}>
            <View style={styles.viewPlan}>
              <Image
                source={item?.imageTopRight || item.image1}
                style={styles.fullwidth}
              />
            </View>
            <View style={styles.viewTitleBlock}>
              <Text>{item?.listSchedule[0].date}</Text>
              <Text
                style={
                  styles.colorDestination
                }>{`${item?.listSchedule[0].schedule.length} điểm đến`}</Text>
            </View>
          </View>
          <View style={styles.blockviewPlan}>
            <View style={styles.viewPlan}>
              <Image
                source={item.imageTopRightBottom || item.image2}
                style={styles.fullwidth}
              />
            </View>
            <View style={styles.viewTitleBlock}>
              <Text>{item?.listSchedule[1].date}</Text>
              <Text
                style={
                  styles.colorDestination
                }>{`${item?.listSchedule[1].schedule.length} điểm đến`}</Text>
            </View>
          </View>
          <View style={styles.blockviewPlan}>
            <View style={styles.viewPlan}>
              <Image
                source={item.imageTopLeftBottom || item.image3}
                style={styles.fullwidth}
              />
            </View>
            <View style={styles.viewTitleBlock}>
              <Text>{item?.listSchedule[2].date}</Text>
              <Text
                style={
                  styles.colorDestination
                }>{`${item?.listSchedule[2].schedule.length} điểm đến`}</Text>
            </View>
          </View>
          <View style={styles.blockviewPlan}>
            <View style={styles.viewPlan}>
              <Image
                source={item.imageTopLeft || item.image}
                style={styles.fullwidth}
              />
            </View>
            <View style={styles.viewTitleBlock}>
              <Text>{item?.listSchedule[3].date}</Text>
              <Text
                style={
                  styles.colorDestination
                }>{`${item?.listSchedule[3].schedule.length} điểm đến`}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Text style={[styles.bold, styles.margin]}>Chuyến đi gồm :</Text>
      <View
        style={{
          marginTop: 16,
          marginLeft: 16,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <AppMaterIcon name="hotel" size={20} color={'#9A9A9A'} />
        <View style={{paddingLeft: 10}}>
          <Text style={styles.bold}>Khách sạn</Text>
          <Text>1 khách sạn, 5 ngày 4 đêm</Text>
        </View>
      </View>
      <View style={styles.blockSubmit}>
        <View style={styles.leftSubmit}>
          <Text style={styles.colorLeftSubmit}>{item?.price}</Text>
        </View>
        <View style={styles.rightSubmit}>
          <TouchableOpacity
            style={styles.rightClick}
            onPress={() => dispatch(setOpenModal(true))}>
            <Text style={styles.colorWhite}>Đặt ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
      {openModal && <OrderSuccess title={'Tour'} />}
    </View>
  );
};

export default ScheduleOverview;
