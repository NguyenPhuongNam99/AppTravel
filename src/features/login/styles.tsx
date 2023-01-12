import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageBackground: {width: '100%', height: '100%'},
  topLevel: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  twoLevel: {
    flex: 4,
    zIndex: 30,
    paddingHorizontal: 16,
  },
  logoIcon: {
    width: 137,
    height: 220,
    zIndex: 2,
  },
  blockLevel: {width: '100%', height: '100%', paddingTop: 60, zIndex: 40},
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 30,
    borderRadius: 30,
    color: 'white',
    marginBottom: 30,
    paddingLeft: 16,
  },
  imageOpacity: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  submit: {
    width: '100%',
    height: 40,
    backgroundColor: '#FF5F24',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  colorSubmit: {color: '#FFFFFF'},
  positionForget: {
    position: 'absolute',
    bottom: 90,
    backgroundColor: '#055EEE',
  },
  positionChangeAcount: {
    bottom: 30,
    position: 'absolute',
    backgroundColor: '#055EEE',
  },
  imageAbsolute: {width: '100%', height: '100%', position: 'absolute'},
  listContent: {width: '100%', height: '100%', zIndex: 30},
});

export default styles;
