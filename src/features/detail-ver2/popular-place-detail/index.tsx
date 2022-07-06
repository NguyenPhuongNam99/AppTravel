import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PopularPlaceDetailV2 = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.blockImage}>
        <Image source={item.image} style={styles.fullWidth} />
        <View style={styles.position} />
        <View style={styles.viewContent}>
          <Text style={[styles.colorWhite, styles.headerTitle]}>
            {item.title}
          </Text>
          <Text style={styles.colorWhite}>{item.place}</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoBlock}>
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  blockImage: {width: '100%', height: 240},
  fullWidth: {width: '100%', height: '100%'},
  position: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  viewContent: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 99,
    paddingLeft: 16,
  },
  colorWhite: {color: 'white'},
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  infoContainer: {
    width: '100%',
    height: 90,
    position: 'absolute',
    bottom: -40,
    paddingHorizontal: 16,
  },
  infoBlock: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default PopularPlaceDetailV2;
