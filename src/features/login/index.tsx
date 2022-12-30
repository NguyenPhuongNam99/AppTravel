import React, { useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import images from '../../assets/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import Loading from '../../components/loading';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const Login = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    userName: '',
    password: '',
  });
  const [loadingLogin, setLoadingLogin] = useState(false);

  // const onSubmit = () => {
  //   _onLogin(data.userName, data.password)
  //     .then(() => {})
  //     .catch(err => console.log('err ', err));
  // };


  const submitForm = async () => {
    try {
      setLoadingLogin(true);
      axios({
        method: 'post',
        url: 'http://206.189.37.26:8080/v1/auth/login',
        data: {
          username: data.userName,
          password: data.password,
        },
      }).then(async data => {
        console.log('data new', data?.data?.accesToken);
        setLoadingLogin(false);

        Toast.show({
          type: 'success',
          text1: 'Đăng nhập thành công 👋',
        });
        await AsyncStorage.setItem('storage_Key', data?.data?.accesToken);
        setTimeout(() => {
          navigation.navigate('BottomTabNavigation' as never);
        }, 1000);
      });
    } catch (error) {
      setLoadingLogin(false);

      Toast.show({
        type: 'success',
        text1: error,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.BACKGROUND_LOGIN}
        resizeMode={'stretch'}
        style={styles.imageBackground}>
        <View style={styles.listContent}>
          <View style={{zIndex: 99}}>
            <Toast />
          </View>

          {loadingLogin && (
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
            <View style={styles.blockLevel}>
              <TextInput
                style={styles.input}
                placeholder="Nhập tài khoản của bạn"
                placeholderTextColor={'white'}
                value={data.userName}
                onChangeText={(text: string) =>
                  setData({...data, userName: text})
                }
              />
              <TextInput
                style={styles.input}
              
                placeholder="Nhập mật khẩu của bạn"
                placeholderTextColor={'white'}
                value={data.password}
                onChangeText={(text: string) =>
                  setData({...data, password: text})
                }
              />
              <TouchableOpacity style={styles.submit} onPress={submitForm}>
                <Text style={styles.colorSubmit}>Đăng nhập</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.submit, styles.positionForget]}
                onPress={() =>
                  navigation.navigate('BottomTabNavigation' as never)
                }>
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
          style={styles.imageAbsolute}
        />
      </ImageBackground>
    </View>
  );
};

export default Login;
