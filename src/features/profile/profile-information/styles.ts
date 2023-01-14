import {StyleSheet, SafeAreaView} from 'react-native';

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
  imageAvatar: {width: 80, height: 80, alignSelf: 'center', borderRadius: 9},
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
    alignItems: 'center',
  },
  cancel: {
    color: '#828282',
  },
  titleHeader: {
    fontWeight: 'bold',
  },
  save: {
    color: '#FF5F24',
  },
  blockAvatar: {
    width: '100%',
    height: 50,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'green',
  },
  imageAvatarUser: {width: '100%', height: '100%', borderRadius: 9},
  blockInput: {
    width: '100%',
    height: '100%',
    marginTop: 30,
    paddingHorizontal: 12,
  },
  containerInput: {width: '100%', height: 60, marginTop: 10},
  imagePicker: {
    position: 'absolute',
    top: -9,
    right: -9,
    backgroundColor: '#7FFFD4',
    borderRadius: 8,
  },
  inputInfor: {
    width: '100%',
    height: 35,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#BEBEBE',
    paddingLeft: 10,
  },
  blockSubmit: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  containerSubmit: {
    width: 100,
    height: 50,
    backgroundColor: '#FF5F24',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
   fontSize: 12
  },
  textSubmit: {color: 'white'},
});
