import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1},
  hotelContainer: {
    width: '100%',
    height: 230,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  hotelBlock: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  hotelTop: {
    flex: 0.69,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hotelBottom: {flex: 0.31, paddingHorizontal: 16, justifyContent: 'center', alignItems: 'flex-start'},
  hotelTopLeft: {flex: 0.4, backgroundColor: 'blue'},
  image: {width: '100%', height: '100%'},
  topRightContainer: {
    flex: 0.57,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topBlock: {flex: 0.48},
  bottomBlock: {
    flex: 0.48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bottomView: {
    width: '47.8%',
    height: '96%',
  },
  bottomStar: {flexDirection: 'row', justifyContent: 'space-between'},
  colorBottom: {color: '#A1A1A1'},
  fontWeight: {fontWeight: 'bold'},
  placeRow: {flexDirection: 'row', justifyContent: 'space-between', width: '100%'},
  row: {flexDirection: 'row', alignItems: 'center'}
});
