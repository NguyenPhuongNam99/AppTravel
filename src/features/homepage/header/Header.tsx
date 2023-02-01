import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, View, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from '../styles';
import images from '../../../assets/images';
import ListMenuIcon from './ListMenuIcon';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import AppAntDesign from '../../../components/icon/AppAntDesign';


const Header = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const isFocues = useIsFocused()

  const onchange = (text) => {
    setValue(text);
    // if (text !== '') {
    //   navigation.navigate('CitySearch' as never)
    // }
  }

  useEffect(() => {
    setValue('')
  }, [isFocues])

  return (
    <View style={styles.header}>
      <View style={styles.blockHeader}>
        <Text style={styles.discoveryHeader}>Khám phá</Text>
        <Text style={styles.colorWhite}>
          Lên lịch trình, đặt vé máy bay, khách sạn, tìm kiếm các tour lịch và
          các hoạt động vui chơi giải trí
        </Text>
        <ListMenuIcon />
      </View>

      <Image
        source={images.MENU}
        resizeMode={'cover'}
        style={styles.imageHeader}
      />

      <View style={styles.searchContainer}>
        <View style={styles.searchBlock}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Bạn muốn đi đâu?"
            autoFocus={false}
            onChangeText={(text) => onchange(text)}
            value={value}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('CitySearch' as never)}
            style={{ position: 'absolute', top: '30%', right: '3%', zIndex: 99, height: 30 }}>
            <AppAntDesign name="search1" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
