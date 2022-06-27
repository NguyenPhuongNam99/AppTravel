import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet} from 'react-native';

const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.BACKGROUND_LOGIN}
        resizeMode={'stretch'}
        style={styles.imageBackground}>
        <View style={styles.blockImageContainer}>
          <View style={styles.topLevel}>
            <Image source={images.LOGO_ICON} style={styles.logoIcon} />
          </View>
          <View style={styles.twoLevel}>
            <View style={styles.blockContent}>
              <TextInput
                style={styles.input}
                placeholder="Nhập email của bạn"
                placeholderTextColor={'white'}
              />
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
              <TouchableOpacity style={styles.submit}>
                <Text style={styles.colorSubmit}>Đăng ký</Text>
              </TouchableOpacity>

              <Text style={styles.askQuestion}>
                Bạn đã có tài khoản OGGO?{' '}
                <Text
                  style={styles.loginText}
                  onPress={() => navigation.goBack()}>
                  Đăng nhập
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <Image source={images.BACKGROUND_OPACITY} style={styles.imageOpacity} />
      </ImageBackground>
    </View>
  );
};

export default Register;
