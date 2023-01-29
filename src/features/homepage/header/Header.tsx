import React from 'react';
import {Image, Text, TextInput, View, SafeAreaView} from 'react-native';
import styles from '../styles';
import images from '../../../assets/images';
import ListMenuIcon from './ListMenuIcon';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

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
            onFocus={() => navigation.navigate('CitySearch' as never)}
            style={styles.inputSearch}
            placeholder="Bạn muốn đi đâu?"
            autoFocus={false}

          />
        </View>
      </View>
    </View>
  );
};

export default Header;
