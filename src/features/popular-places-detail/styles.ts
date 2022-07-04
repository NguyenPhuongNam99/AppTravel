import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  popularContainer: {
    width: '100%',
    height: 180,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  popularBlock: {width: '100%', height: '100%'},
  position: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
  },
  imageBlock: {
    height: 180,
    width: '100%',
    // opacity: 0.8,
  },
  textTitle: {
    position: 'absolute',
    top: '44%',
    // left: '45%',
    color: 'white',
    alignSelf: 'center'
  },
  textPlace: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    color: 'white',
  }
});
