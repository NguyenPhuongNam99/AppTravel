import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import React, { useEffect } from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './styles';
import {Destination12} from '../homepage/fake-data/FakeData';
import axios from 'axios';
import {Base_Url} from '../../constants/const';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Place12 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Điểm đến tháng 12" backOption={true} />
      <FlatList
        data={Destination12}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.popularContainer} onPress={() => navigation.navigate('Place12Detail' as never, {dataPass: item, title: item.title } as never)}>
              <View style={styles.popularBlock}>
                {/* <View style={styles.position} /> */}
                <Image
                  source={item.image}
                  resizeMode={'stretch'}
                  style={styles.imageBlock}
                />
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text style={styles.textPlace}>
                  <AppMaterIcon name="place" color={'#3076FE'} />
                  {item.nameCIty}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Place12;
