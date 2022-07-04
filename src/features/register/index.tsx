import React, {useState} from 'react';
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
import registerApi from './registerApi';
import Loading from '../../components/loading';

const Register = () => {
  const [value, setValue] = useState({
    email: '',
    accountName: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation();
  const subit = async () => {
    const params = {
      username: value.accountName,
      email: value.email,
      password: value.password,
    };
    try {
      setLoading(true);
      await registerApi._onRegister(params).then(
        () => (
          navigation.navigate('Login' as never),
          setValue({
            email: '',
            accountName: '',
            password: '',
          })
        ),
      );
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
                  setValue({...value, email: text})
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Nhập tài khoản của bạn"
                placeholderTextColor={'white'}
                value={value.accountName}
                onChangeText={(text: string) =>
                  setValue({...value, accountName: text})
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Nhập mật khẩu của bạn"
                placeholderTextColor={'white'}
                value={value.password}
                onChangeText={(text: string) =>
                  setValue({...value, password: text})
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
          {loading && <Loading />}
        </View>
        <Image source={images.BACKGROUND_OPACITY} style={styles.imageOpacity} />
      </ImageBackground>
    </View>
  );
};

export default Register;
