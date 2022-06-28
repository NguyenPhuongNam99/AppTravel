import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scheduleContainer: {
    width: '100%',
    height: 250,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  scheduleBlock: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 5
  },
  scheduleTop: {
    flex: 0.64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  scheduleBottom: {flex: 0.36, paddingHorizontal: 16,justifyContent: 'center', alignItems: 'flex-start'},
  imageSchedule: {width: '100%', height: '100%'},
  topLeftSchedule: {flex: 0.41},
  topRightSchedule: {flex: 0.57},
  topRightTop:{flex: 0.48},
  topRightBottom: {
    flex: 0.52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bottomLeft: {
    width: '48%',
    height: '92%',
  },
  bottomRight: {
    width: '48%',
    height: '92%',
  },
  titleContainer: {flexDirection: 'row', justifyContent: 'space-between', width: '100%'},
  bold: {fontWeight: 'bold'},
  colorTime: {color: '#494949'},
  destination: {flexDirection: 'row', alignItems: 'center'},
  bottomBlock: {
    width: '100%',
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 9
  },
  bottomLeft1: {flexDirection: 'row', alignItems: 'center'},
  bottomRight1: {
    backgroundColor: '#FF5F24',
    height: '100%',
    width: 105,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  imageAvatar: {width: 25, height: 25},
  price: {fontSize: 10, color: 'white'},
  padding: {
    paddingLeft: 7
  },
  colorPlace: {
      color: '#3076FE'
  }
});
