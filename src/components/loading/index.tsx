import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <View
      style={{
       flex: 1,
        zIndex: 99,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
      }}>
      <Lottie
        source={require('../../json/pinterest.json')}
        style={{ zIndex: 99 }}
        autoPlay
        loop
      />
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
