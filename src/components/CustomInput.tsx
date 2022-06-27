import React from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  title: string;
  keyName: string;
  value: string;
  onValueChange: (keyName: string, value: string) => void;
}

// ko biet config typescipt roi, config lai di nhe
export const CustomInput = (props: Props) => {
  const {title, keyName, value, onValueChange, ...rest} = props;

  const onChangeText = (val: string) => {
    onValueChange(keyName, val);
  };
  return (
    <View style={{width: '100%', marginTop: 12}}>
      <Text>{title}</Text>
      <TextInput
        style={{
          width: '100%',
          minHeight: 44,
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
        }}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};
