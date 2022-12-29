import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import images from '../../assets/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {userContext} from '../../hook/useLogin';
import Loading from '../../components/loading';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    userName: '',
    password: '',
  });
  const {_onLogin, getIsLoading} = useContext(userContext);
  const loading = getIsLoading();
  console.log('loading new', loading);

  const onSubmit = () => {
    _onLogin(data.userName, data.password)
      .then(() => {})
      .catch(err => console.log('err ', err));
  };

  // const getApi = async () => {
  //   try {
  //     const response = await axios.get(
  //       'http://206.189.37.26:8080/v1/restaurant/getAllRestaurant',
  //     );
  //   } catch (error) {
  //     console.log('errro', error);
  //   }
  // };

  const submitForm = async () => {
    try {
      axios({
        method: 'post',
        url: 'http://206.189.37.26:8080/v1/auth/login',
        data: {
          username: data.userName,
          password: data.password,
        },
      }).then(async data => {
        console.log('data new', data?.data?.accesToken);
        await AsyncStorage.setItem('storage_Key', data?.data?.accesToken);
        navigation.navigate('BottomTabNavigation' as never);
      });
    } catch (error) {}
  };

  // useEffect(() => {
  //   getApi();
  // }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.BACKGROUND_LOGIN}
        resizeMode={'stretch'}
        style={styles.imageBackground}>
        <View style={styles.listContent}>
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
          {loading && <Loading />}
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
