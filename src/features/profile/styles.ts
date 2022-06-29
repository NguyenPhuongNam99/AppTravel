import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1},
  safeView: {backgroundColor: 'white'},
  header: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {fontWeight: 'bold'},
  headerInfo: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    marginTop: 26,
    paddingLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageAvatar: {width: 60, height: 60, marginRight: 16},
  blockList: {
    width: '100%',
    height: 207,
    backgroundColor: 'white',
    marginTop: 39,
    paddingVertical: 10,
  },
  listView: {
    width: '100%',
    height: 38,
    alignItems: 'center',
    paddingHorizontal: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listLeft: {width: '7%'},
  listRight: {
    width: '88%',
    borderBottomColor: '#B9B9B9',
    borderBottomWidth: 0.3,
    paddingBottom: 6,
  },
  listRight1: {
    width: '88%',
  
  }
});
