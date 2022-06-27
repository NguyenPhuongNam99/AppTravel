import {CustomInput} from '../../components/CustomInput';
import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

// ko biet config typescript go~ ko goi y kho qua
const Login = () => {
  const nameRef = useRef<TextInput>();
  const [params, setParams] = useState({
    name: '',
    email: '',
    description: '',
  });

  const onValueChange = (keyName: string, value: string) => {
    setParams({
      ...params,
      [keyName]: value,
    });
  };
  console.log('params = ', params);
  console.log('refg new', nameRef.current);

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <TextInput
          ref={nameRef}
          style={styles.input}
          placeholder={'Ho & ten'}
          onChange={value => {
            nameRef.current = value;
          }}
        />

        <TouchableOpacity
          onPress={() => {
            console.log('name ', nameRef?.current);
          }}>
          <Text>Log name</Text>
        </TouchableOpacity>

        <CustomInput
          keyName={'email'}
          value={params.email}
          title={'Email'}
          placeholder={'Email'}
          onValueChange={onValueChange}
        />

        <CustomInput
          keyName={'description'}
          value={params.description}
          title={'description'}
          placeholder={'description'}
          onValueChange={onValueChange}
          multiline={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  block: {
    width: '100%',
    height: '100%',
    marginTop: 30,
  },
  input: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    paddingLeft: 10,
  },
});
export default Login;
