import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../assets/images/index';
import Login from '../login/index';
const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <View style={styles.containerOne} />
          <View style={styles.containerTwo}>
            <Image
              source={images.FAME_LOGO}
              resizeMode="contain"
              style={styles.imageContent}
            />
            <Image source={images.LOGO_ICON} style={styles.imageLogo} />
          </View>
          <View style={styles.containerOne}>
            <Text>Welcome!</Text>
          </View>
        </View>
      ) : (
        <Login />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerOne: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTwo: {width: '100%', height: '80%'},
  imageContent: {width: '100%', height: '100%'},
  imageLogo: {
    position: 'absolute',
    top: '8%',
    left: '41%',
    width: 76,
    height: 122,
  },
});

export default SplashScreen;
