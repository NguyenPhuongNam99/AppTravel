import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
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

const ScheduleOverview = ({route}) => {
  const {item} = route.params;
  const [indexData, setIndexData] = useState<number>(0);
  const navigation = useNavigation();

  console.log('item preess,', item);

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
          source={item.imageTopLeft}
          resizeMode="stretch"
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
        <Text>{item.durationTime}</Text>
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
      <TitleBlock label="Kế hoạch" navigateScreen={'Discount'} />
      <View style={styles.planContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.blockviewPlan}>
            <View style={styles.viewPlan}>
              <Image source={item.imageTopRight} style={styles.fullwidth} />
            </View>
            <View style={styles.viewTitleBlock}>
              <Text>{item.Day1.date}</Text>
              <Text
                style={
                  styles.colorDestination
                }>{`${item.Day1.schedule.length} điểm đến`}</Text>
            </View>
          </View>
          <View style={styles.blockviewPlan}>
            <View style={styles.viewPlan}>
              <Image
                source={item.imageTopRightBottom}
                style={styles.fullwidth}
              />
            </View>
            <View style={styles.viewTitleBlock}>
              <Text>{item.Day2.date}</Text>
              <Text
                style={
                  styles.colorDestination
                }>{`${item.Day2.schedule.length} điểm đến`}</Text>
            </View>
          </View>
          <View style={styles.blockviewPlan}>
            <View style={styles.viewPlan}>
              <Image
                source={item.imageTopLeftBottom}
                style={styles.fullwidth}
              />
            </View>
            <View style={styles.viewTitleBlock}>
              <Text>{item.Day3.date}</Text>
              <Text
                style={
                  styles.colorDestination
                }>{`${item.Day3.schedule.length} điểm đến`}</Text>
            </View>
          </View>
          <View style={styles.blockviewPlan}>
            <View style={styles.viewPlan}>
              <Image source={item.imageTopLeft} style={styles.fullwidth} />
            </View>
            <View style={styles.viewTitleBlock}>
              <Text>{item.Day4.date}</Text>
              <Text
                style={
                  styles.colorDestination
                }>{`${item.Day4.schedule.length} điểm đến`}</Text>
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
          <Text style={styles.colorLeftSubmit}>{item.price}</Text>
        </View>
        <View style={styles.rightSubmit}>
          <TouchableOpacity
            style={styles.rightClick}
            onPress={() =>
              navigation.navigate(
                'ScheduleOverview' as never,
                {item: item} as never,
              )
            }>
            <Text style={styles.colorWhite}>Đặt ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ScheduleOverview;
