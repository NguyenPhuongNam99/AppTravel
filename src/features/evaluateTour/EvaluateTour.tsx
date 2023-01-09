import React, {useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useAppSelector} from '../../app/store';
import Toast from 'react-native-toast-message';

const EvaluateTour = ({route}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Tốt', value: 'good'},
    {label: 'Bình thường', value: 'normal'},
    {label: 'không tốt', value: 'not-good'},
  ]);
  const [loading, setLoading] = useState(false);
  const data: any = useAppSelector(state => state.LoginSlice.data);
  console.log('data new', data);

  const {item} = route.params;
  console.log('item', item.item.item.item.idTour);

  const navigation = useNavigation();

  const sendReview = async () => {
    try {
      const tokenNew = await AsyncStorage.getItem('storage_Key');
      setLoading(true);
      const obj = {
        user_id: data._id,
        content: content,
        rate_star: value,
        tour_id: item.item.item.item.idTour,
        title: title,
      };
      const response = await axios.post(
        'http://206.189.37.26:8080/v1/review/createreview',
        obj,
        {
          headers: {
            Authorization: `Bearer ${tokenNew}`,
          },
        },
      );
      Toast.show({
        type: 'success',
        text1: 'Đánh giá thành công 👋',
      });
      setLoading(false);
      setTimeout(() => {
        navigation.goBack()
      }, 900)
      console.log('responseeee', response);
    } catch (error) {
            setLoading(false);

    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.blockHeader}>
          <TouchableOpacity
            style={styles.block1}
            onPress={() => navigation.goBack()}>
            <Text style={styles.colorHeader}>Huỷ</Text>
          </TouchableOpacity>
          <View style={styles.block2}>
            <Text style={styles.titleHeader}>Đánh giá lịch trình</Text>
          </View>
          <TouchableOpacity style={styles.block3} onPress={sendReview}>
            <Text style={styles.colorHeader}>Gửi</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerContent}>
          <View style={styles.contentTtile}>
            <TextInput
              placeholder="Tiêu đề"
              value={title}
              onChangeText={(value: any) => setTitle(value)}
            />
          </View>
          <View style={styles.contentValuate}>
            <TextInput
              placeholder="Nhận xét"
              multiline={true}
              onChangeText={(value: any) => setContent(value)}
            />
          </View>
        </View>

        <View style={styles.dropDownContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Lựa chọn đánh giá của bạn"
            style={styles.dropdown}
            dropDownContainerStyle={{borderWidth: 1, borderColor: '#d5d5d9'}}
          />
        </View>
      </View>

      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
      )}

      <View style={{zIndex: 99}}>
        <Toast />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
  },
  blockHeader: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  block1: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block2: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block3: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorHeader: {
    color: '#828282',
    fontSize: 12,
  },
  titleHeader: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '700',
  },

  containerContent: {
    width: '100%',
    height: 200,
    marginTop: 40,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  contentTtile: {
    width: '100%',
    height: '25%',
    borderBottomWidth: 1,
    borderBottomColor: '#828282',
  },
  contentValuate: {
    height: '75%',
    width: '100%',
  },
  dropDownContainer: {
    marginTop: 20,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    alignSelf: 'center',
    paddingTop: 10,
  },
  dropdown: {
    width: '100%',
    minHeight: 20,
    borderWidth: 1,
    borderColor: '#d5d5d9',
  },
  loading: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
export default EvaluateTour;
