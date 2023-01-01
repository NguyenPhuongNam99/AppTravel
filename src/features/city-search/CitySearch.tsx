import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import AppAntDesign from '../../components/icon/AppAntDesign';
import {Base_Url} from '../../constants/const';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash'

const CitySearch = () => {
  const [dataCity, setDataCity] = useState([]);
  const [dataSearch, setDataSearch] = useState<any>();

  const navigation = useNavigation();

  const getAllCity = async () => {
    const tokenNew = await AsyncStorage.getItem('storage_Key');

    try {
      const response = await axios.get(`${Base_Url}/v1/city/getAllCity`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      });
      console.log('response new', response.data);
      setDataCity(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getTourOfCity = async id => {
    try {
      const response = await axios.get(
        `${Base_Url}/v1/tour/getAllTourOfCity/${id}`,
      );
      navigation.navigate(
        'RecentScheduleDetail' as never,
        {
          passData: response.data,
          title: 'Tour tìm kiếm',
        } as never,
      );
    } catch (error) {}
  };

  const onChange = async (text: string) => {
    const tokenNew = await AsyncStorage.getItem('storage_Key');
    console.log('empty', _.isEmpty(text))

    const textValue = _.isEmpty(text) ? 't': text;
    try {
      const response = await axios.get(`${Base_Url}/v1/city/getCitySearch/${textValue}`, {
        headers: {
          Authorization: `Bearer ${tokenNew}`,
        },
      });
      console.log('response new', response.data);
      setDataSearch(response.data)
      setDataCity(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getAllCity();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <View style={styles.inputLeft}>
          <TextInput
            placeholder="Bạn muốnn đi đâu ?"
            style={styles.inputSearech}
            value={dataSearch}
            onChangeText={text => onChange(text)}
          />
        </View>
        <TouchableOpacity style={styles.inputRight}>
          <AppAntDesign name="search1" size={16} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={dataCity}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.blockCitySearch}
              onPress={() => getTourOfCity(item.cityId)}>
              <View style={styles.row}>
                <AppMaterIcon
                  size={15}
                  color={'#FF5F24'}
                  name="place"
                  style={styles.icon}
                />
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
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
  containerInput: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  inputLeft: {
    width: '85%',
    height: '100%',
  },
  inputRight: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSearech: {
    width: '100%',
    height: '100%',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
  },
  blockCitySearch: {
    width: '100%',
    height: 30,
    backgroundColor: 'white',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  row: {flexDirection: 'row'},
  icon: {alignSelft: 'center', paddingTop: 2, paddingRight: 5},
});

export default CitySearch;
