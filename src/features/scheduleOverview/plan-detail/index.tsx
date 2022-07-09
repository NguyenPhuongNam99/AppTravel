import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import AppIonicons from '../../../components/icon/AppIonicons';
import {useNavigation} from '@react-navigation/core';
import {styles} from './styles';
import ListContent from '../plan-detail/list-content/ListContent';

const DetailPlan = ({route}) => {
  const naivgation = useNavigation();
  const {passData} = route.params;
  const [indexValue, setIndexValue] = useState(0);

  const renderComponent = () => {
    switch (indexValue) {
      case 0:
        return <ListContent data={passData.listSchedule[0].schedule} />;
      case 1:
        return <ListContent data={passData.listSchedule[1].schedule} />;
      case 2:
        return <ListContent data={passData.listSchedule[2].schedule} />;
      case 3:
        return <ListContent data={passData.listSchedule[3].schedule} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.blockimage}>
        <Image
          source={passData.imageTopLeft || passData.image}
          resizeMode="cover"
          style={styles.image}
        />

        <View style={styles.position}>
          <Text style={styles.colorWhite}>{passData.title}</Text>
          <Text style={styles.colorWhite}>{passData.durationTime}</Text>
        </View>
        <AppIonicons
          name="chevron-back-outline"
          size={20}
          color={'white'}
          style={{position: 'absolute', top: '30%', left: 15}}
          onPress={() => naivgation.goBack()}
        />
      </View>
      <View style={styles.DateContainer}>
        <View style={styles.DateView}>
          <FlatList
            data={passData.listSchedule}
            horizontal
            style={styles.fullWidth}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.blockDate}
                  onPress={() => setIndexValue(index)}>
                  <Text style={{fontWeight: 'bold'}}>
                    {passData.listSchedule[index].datetime}
                  </Text>
                  <Text>{passData.listSchedule[index].date}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <>{renderComponent()}</>
      <View style={styles.blockSubmit}>
        <View style={styles.leftSubmit}>
          <Text style={styles.colorLeftSubmit}>{passData?.price}</Text>
        </View>
        <View style={styles.rightSubmit}>
          <TouchableOpacity style={styles.rightClick}>
            <Text style={styles.colorWhite}>Đặt ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailPlan;
