import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import images from '../../assets/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.BACKGROUND_LOGIN}
        resizeMode={'stretch'}
        style={styles.imageBackground}>
        <View style={{width: '100%', height: '100%', zIndex: 99}}>
          <View style={styles.topLevel}>
            <Image source={images.LOGO_ICON} style={styles.logoIcon} />
          </View>
          <View style={styles.twoLevel}>
            <View style={styles.blockLevel}>
              <TextInput
                style={styles.input}
                placeholder="Nhập tài khoản của bạn"
                placeholderTextColor={'white'}
              />
              <TextInput
                style={styles.input}
                placeholder="Nhập mật khẩu của bạn"
                placeholderTextColor={'white'}
              />
              <TouchableOpacity
                style={styles.submit}
                onPress={() => navigation.navigate('HomePage' as never)}>
                <Text style={styles.colorSubmit}>Đăng nhập</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.submit, styles.positionForget]}>
                <Text style={styles.colorSubmit}>Quên mật khẩu</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.submit, styles.positionChangeAcount]}
                onPress={() => navigation.navigate('Register' as never)}>
                <Text style={styles.colorSubmit}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Image
          source={images.BACKGROUND_OPACITY}
          style={{width: '100%', height: '100%', position: 'absolute'}}
        />
      </ImageBackground>
    </View>
  );
};

export default Login;
