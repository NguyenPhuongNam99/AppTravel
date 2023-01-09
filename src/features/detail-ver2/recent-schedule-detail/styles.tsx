import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  blockImageContainer: {width: '100%', height: 240, backgroundColor: 'blue'},
  fullWidth: {width: '100%', height: '100%'},
  viewPosition: {position: 'absolute', bottom: 10, left: 10, zIndex: 99},
  headerPosition: {color: 'white', fontWeight: 'bold'},
  colorWhite: {color: 'white'},
  backgroundPosition: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  iconBack: {position: 'absolute', top: '20%', left: 10, zIndex: 99,  width: 30, height: 30},
  blockMap: {width: '100%', height: 140, marginTop: 16},
  blockImage: {
    width: '100%',
    height: 104,
    marginTop: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blockItem: {
    width: '30%',
    height: '100%',
    backgroundColor: 'blue',
  },
  viewText: {
    marginTop: 16,
    width: '100%',
    paddingHorizontal: 16,
  },
  bold: {fontWeight: 'bold'},
  textTitle: {marginTop: 10, lineHeight: 20},
  blockSubmit: {
    position: 'absolute',
    width: '100%',
    height: 60,
    bottom: 0,
    left: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  leftSubmit: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  colorLeftSubmit: {color: '#FF5F24', fontSize: 16},
  rightSubmit: {
    width: '40%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightClick: {
    width: 92,
    height: 30,
    backgroundColor: '#FF5F24',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockInfo: {width: '100%', height: 80, position: 'absolute', bottom: -40, paddingHorizontal: 15, zIndex: 99},
  containInfo: {width: '100%', height: '100%', backgroundColor: 'white', borderRadius: 8,zIndex: 9, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10},
  textInfo: {
    fontSize: 12,
    color: 'black'
  },
  containerClick: {width: '100%', height: 40,  marginTop: 10, paddingHorizontal: 10},
  blockClick: {width: '100%', height: '100%', backgroundColor: '#FF5F24', borderRadius: 9, justifyContent: 'center', alignItems: 'center'}
});
