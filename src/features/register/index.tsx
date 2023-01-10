import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/images';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import registerApi from './registerApi';
import Loading from '../../components/loading';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const Register = () => {
  const [value, setValue] = useState({
    email: '',
    accountName: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation();
  const subit = async () => {
    try {
      setLoading(true);
      axios({
        method: 'post',
        url: 'http://206.189.37.26:8080/v1/auth/register',
        data: {
          username: value.accountName,
          email: value.email,
          password: value.password,
          last_name: '',
          gender: true,
          phone_number: '',
          avatar_url: '',
          role: '',
          status: '',
          first_name: '',
        },
      });
      Toast.show({
        type: 'success',
        text1: 'Đăng nhập thành công 👋',
      });
      setValue({
        email: '',
        accountName: '',
        password: '',
      })
      setTimeout(() => {
        navigation.navigate('Login' as never);
      }, 900);
      setLoading(false);
    } catch (error) {
      console.log('err ne', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.BACKGROUND_LOGIN}
        resizeMode={'stretch'}
        style={styles.imageBackground}>
        <View style={styles.blockImageContainer}>
          <View style={{ zIndex: 99 }}>
            <Toast />
          </View>

          {loading && (
            <View
              style={{
                width: '100%',
                height: '100%',
                zIndex: 99,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.7)',
              }}>
              <ActivityIndicator size={'large'} color={'green'} />
            </View>
          )}
          <View style={styles.topLevel}>
            <Image source={images.LOGO_ICON} style={styles.logoIcon} />
          </View>
          <View style={styles.twoLevel}>
            <View style={styles.blockContent}>
              <TextInput
                style={styles.input}
                placeholder="Nhập email của bạn"
                placeholderTextColor={'white'}
                value={value.email}
                onChangeText={(text: string) =>
                  setValue({ ...value, email: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Nhập tài khoản của bạn"
                placeholderTextColor={'white'}
                value={value.accountName}
                onChangeText={(text: string) =>
                  setValue({ ...value, accountName: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Nhập mật khẩu của bạn"
                placeholderTextColor={'white'}
                value={value.password}
                onChangeText={(text: string) =>
                  setValue({ ...value, password: text })
                }
              />

              <TouchableOpacity
                disabled={
                  !value.accountName && !value.password && !value.email && true
                }
                style={styles.submit}
                onPress={subit}>
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
