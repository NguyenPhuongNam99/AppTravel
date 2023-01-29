import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import AppIonicons from '../../components/icon/AppIonicons';
import RenderHtml from 'react-native-render-html';
import {useNavigation} from '@react-navigation/native';

const BlogDetail = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const source = {
    html: `
${item?.description}`,
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.row}>
            <AppIonicons
              name="chevron-back-outline"
              size={20}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.colorTitle}>{item.title}</Text>
          </View>
        </View>

        <View style={styles.headerTitle}>
          <View style={styles.blockTitle}>
            <Image source={{uri: String(item.thumbnail)}} style={styles.fullwidth} />
          </View>
        </View>

        <View style={{width: '100%', paddingHorizontal: 10}}>
          <RenderHtml contentWidth={200} source={source} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  row: {flexDirection: 'row', width: '100%'},
  colorTitle: {
    color: 'black',
    fontSize: 14,
  },
  headerTitle: {
    width: '100%',
    height: 290,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  blockTitle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 9,
  },
  fullwidth: {width: '100%', height: '100%', borderRadius: 9},
});
export default BlogDetail;
