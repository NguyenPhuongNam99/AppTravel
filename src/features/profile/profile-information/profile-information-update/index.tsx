import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from '../styles';
import { useAppSelector } from '../../../../app/store';
import _ from 'lodash';
import AppAntDesign from '../../../../components/icon/AppIonicons';
import { Formik } from 'formik';
import { UpdateInforSchema } from '../../../../Utils';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../../../components/loading/index'
import Toast from 'react-native-toast-message';

const UpdateInformationProfile = () => {
  const dataUser: any = useAppSelector(state => state.LoginSlice.data);
  const imageDefault =
    'https://hri.com.vn/wp-content/uploads/2017/09/default-avatar-ginger-guy.png';
  const [response, setResponse] = React.useState<any>(null);
  const includeExtra = true;
  const navigation = useNavigation();
  const [avatar, setAvartar] = useState(imageDefault);
  const [loading, setLoading] = useState(false)

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      setLoading(true)
      ImagePicker.launchCamera(options, responseData => {
        console.log('responseData.assets[0]', responseData.assets[0]);
        const datas = new FormData();

        datas.append('upload', {
          uri: responseData.assets[0].uri,
          name: responseData.assets[0].fileName,
          type: 'image/jpeg',
        });

        fetch('http://206.189.37.26:8080/uploadImageCloud', {
          method: 'POST',
          body: datas,
        })
          .then((response: any) => {
            return response.json();
            // console.log('response new', response);
            // setResponse(response)
          })
          .then(data => {
            console.log('data', data.url)
            setAvartar(data.url)
            setLoading(false)
          })
          .catch(error => setLoading(false)
          );
      });
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  const postData = async (value) => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');
      setLoading(true)

      const obj = {
        first_name: value.first_name, last_name: value.last_name, phone_number: value.phone_number, avatar_url: avatar
      }
      const response = await axios.put(`http://206.189.37.26:8080/v1/user/updateUser/${dataUser._id}`,
        obj,
        {
          headers: {
            Authorization: `Bearer ${tokenNew}`,
          },
        })

      console.log('response update', response.data)
      Toast.show({
        type: 'success',
        text1: 'Đăng nhập thành công 👋',
      });
      setTimeout(() => {
        navigation.navigate('HomePage' as never)
      }, 1000)
      setLoading(false)

    } catch (error) {
      setLoading(false)

    }
  }

  return (
    <View style={styles.container}>
      {
        loading &&
        <Loading />
      }
      <View style={{ zIndex: 99 }}>
        <Toast />
      </View>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.blockInformation}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.cancel}>Hủy</Text>
          </TouchableOpacity>
          <Text style={styles.titleHeader}>Sửa thông tin cá nhân</Text>
          <Text style={styles.save}></Text>
        </View>
      </SafeAreaView>

      <TouchableOpacity
        style={styles.blockAvatar}
        onPress={() =>
          onButtonPress('capture', {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra,
          })
        }>
        <View style={styles.blockImage}>
          <Image
            source={{
              uri: avatar,
            }}
            style={styles.imageAvatarUser}
          />
          <View style={styles.imagePicker}>
            <AppAntDesign name="camera-outline" size={20} />
          </View>
        </View>
      </TouchableOpacity>
      <Formik
        initialValues={{ first_name: '', last_name: '', phone_number: '' }}
        validationSchema={UpdateInforSchema}
        onSubmit={async (value) => {
          const submit = await postData(value);
          console.log('response subnit', submit)
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.blockInput}>
            <View style={styles.containerInput}>
              <Text> Nhập Tên</Text>
              <TextInput
                style={styles.inputInfor}
                onChangeText={handleChange('first_name')}
                onBlur={handleBlur('first_name')}
                value={values.first_name}
              />
            </View>
            {errors.first_name && touched.first_name ? (
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.first_name}
              </Text>
            ) : null}
            <View style={styles.containerInput}>
              <Text>Nhập Họ</Text>
              <TextInput
                style={styles.inputInfor}
                onChangeText={handleChange('last_name')}
                onBlur={handleBlur('last_name')}
                value={values.last_name}
              />
            </View>
            {errors.last_name && touched.last_name ? (
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.last_name}
              </Text>
            ) : null}
            <View style={styles.containerInput}>
              <Text>Nhập Số điện thoại</Text>
              <TextInput
                style={styles.inputInfor}
                onChangeText={handleChange('phone_number')}
                onBlur={handleBlur('phone_number')}
                value={values.phone_number}
              />
            </View>
            {errors.phone_number && touched.phone_number ? (
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.phone_number}
              </Text>
            ) : null}

            <Button
              mode="contained"
              style={{ backgroundColor: '#FF5F24', opacity: 0.98, marginTop: 40 }}
              onPress={handleSubmit}>
              Cập nhật
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default UpdateInformationProfile;
