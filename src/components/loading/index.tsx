import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'#055EEE'} size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default Loading;
