import React, {useState} from 'react';
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
import loginAPI from './loginApi';

const Login = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    userName: '',
    password: '',
  });

  const _onpRESS = async () => {
    try {
      const params = {
        username: data.userName,
        password: data.password,
      };
      const response = await loginAPI.login(params);
      navigation.navigate('HomePage' as never);
      console.log('response new', response);
    } catch (error) {
      console.log('err new', error);
    }
  };
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
              <TouchableOpacity style={styles.submit} onPress={_onpRESS}>
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
          style={styles.imageAbsolute}
        />
      </ImageBackground>
    </View>
  );
};

export default Login;
