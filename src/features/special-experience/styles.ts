import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  specialContainer: {
    width: '100%',
    height: 243,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  specialBlock: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  specialTop: {
    width: '100%',
    height: '67%',
  },
  image: {width: '100%', height: '100%'},
  specialBottom: {
    width: '100%',
    height: '33%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 16,
    flexDirection: 'column',
    paddingVertical: 10,
  },
  flex: {flexDirection: 'row'},
  colorTitle: {color: '#FF5F24'},
});
