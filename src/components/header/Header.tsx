import React from 'react';
import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import {TypeHeader} from '../../app/type';
import {useNavigation} from '@react-navigation/core';
import AppIonicons from '../icon/AppIonicons';
import styles from '../header/styles';

const Header: React.FC<TypeHeader> = ({title}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{width: '100%', backgroundColor: 'white'}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AppIonicons name="chevron-back-outline" size={25} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
