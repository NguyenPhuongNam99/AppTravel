import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import AppIonicons from '../../components/icon/AppIonicons';
import {useNavigation} from '@react-navigation/core';


const ScheduleOverview = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const formatTime = item.item.time_line.map(itemTime => itemTime.day);
  const [indexData, setIndexData] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.imageBlock}>
        <Image
          source={{uri: item.item.item.thumbnail[0].url}}
          resizeMode="cover"
          style={styles.fullwidth}
        />
        <View style={styles.backgroundBlur} />
        <Text style={styles.timeFormat}>
          {formatTime[0] + '  đến  ' + formatTime[formatTime.length - 1]}
        </Text>
        <AppIonicons
          name="chevron-back-outline"
          size={20}
          color={'white'}
          style={styles.back}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={{width: '100%', height: 60, paddingLeft: 14}}>
        <FlatList
          data={item.item.time_line}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => setIndexData(index)}
                style={{
                  width: 80,
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Text>Ngày {index}</Text>
                <Text style={{color: 'black'}}>{item.day}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View
        style={{
          width: '100%',
          height: '100%',
          marginTop: 10,
          paddingHorizontal: 14,
        }}>
        <FlatList
          data={item.item.time_line[indexData].schedule}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '100%',
                  height: 60,

                  borderRadius: 6,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 25,
                }}>
                <View
                  style={{
                    width: '5%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>
                    {index}
                  </Text>
                </View>
                <View
                  style={{
                    width: '95%',
                    height: '100%',
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    borderRadius: 6,
                  }}>
                  <View
                    style={{
                      width: '30%',
                    }}>
                    <Image
                      source={{uri: item.thumbnail}}
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'black',
                        borderRadius: 6,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: '70%',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      paddingLeft: 10,
                    }}>
                    <Text style={{color: 'black'}}>{item.location}</Text>
                    <Text numberOfLines={1} style={{color: 'black'}}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

      <View style={{width: '100%', height: 50, backgroundColor: 'white', position: 'absolute', bottom: 0, flexDirection: 'row', paddingHorizontal: 13}}>
          <View style={{width: '60%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
              <Text style={{color: '#FF5F24', fontSize: 16, fontWeight: '700'}}>5,200,000 đ/ người</Text>
          </View>
            <View style={{width: '40%', height: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={() => navigation.navigate('ConfirmScreen' as never, {item: item} as never)}  style={{width: 70, height: 25, backgroundColor: '#FF5F24', justifyContent: 'center', alignItems: 'center', borderRadius: 6}}>
                <Text style={{color: 'white'}}>Đặt ngay</Text>
              </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

export default ScheduleOverview;
