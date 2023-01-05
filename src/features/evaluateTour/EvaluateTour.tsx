import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

const EvaluateTour = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Tốt', value: 'good'},
    {label: 'Bình thường', value: 'normal'},
    {label: 'không tốt', value: 'not-good'},
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.blockHeader}>
          <TouchableOpacity style={styles.block1}>
            <Text style={styles.colorHeader}>Huỷ</Text>
          </TouchableOpacity>
          <View style={styles.block2}>
            <Text style={styles.titleHeader}>Đánh giá lịch trình</Text>
          </View>
          <TouchableOpacity style={styles.block3}>
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
            placeholder='Lựa chọn đánh giá của bạn'
            style={styles.dropdown}
          />
        </View>
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
    height: 80,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  dropdown: {
    width: '100%',
    height: 30,
  },
});
export default EvaluateTour;
