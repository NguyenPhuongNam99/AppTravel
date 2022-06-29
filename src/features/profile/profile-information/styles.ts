import { StyleSheet, SafeAreaView } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    width: '100%',
    height: 85,
    paddingHorizontal: 16,
    flexDirection: 'row',
    marginTop: 16,
  },
  leftAvatar: {
    width: '40%',
    height: '100%',
  },
  imageAvatar: {width: 60, height: 60, alignSelf: 'center'},
  titleAvatar: {textAlign: 'center', paddingTop: 4},
  rightAvatar: {
    width: '60%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightInfo: {
    height: 30,
    borderWidth: 1,
    borderColor: '#A2A2A2',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  SafeAreaView: {backgroundColor: 'white'},
  blockInformation: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cancel: {
      color: '#828282'
  },
  titleHeader: {
      fontWeight: 'bold'
  },
  save: {
      color: '#FF5F24'
  }
});
